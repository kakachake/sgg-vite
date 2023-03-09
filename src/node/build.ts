import { build as viteBuild, InlineConfig } from 'vite';
import type { RollupOutput } from 'rollup';
import {
  CLIENT_ENTRY_PATH,
  MASK_SPLITTER,
  SERVER_ENTRY_PATH
} from './constants';
import path, { dirname, join } from 'path';
import fs from 'fs-extra';
import ora from 'ora';
import { pathToFileURL } from 'url';
import { SiteConfig } from 'shared/types';
import { createVitePlugins } from './vitePlugins';
import type { Plugin } from 'vite';
import { Route } from './plugin-routes';
import { RenderResult } from 'runtime/ssr-entry';

export async function bundle(root: string, config: SiteConfig) {
  const resolveViteConfig = async (
    isServer: boolean
  ): Promise<InlineConfig> => ({
    mode: 'production',
    root,
    ssr: {
      noExternal: ['react-router-dom', 'lodash-es']
    },
    plugins: (await createVitePlugins(config, undefined, isServer)) as Plugin[],
    build: {
      ssr: isServer,
      outDir: isServer ? path.join(root, 'temp') : path.join(root, 'build'),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm'
        }
      }
    }
  });
  const spinner = ora();

  // spinner.start(`Building client + server bundles...`);

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      // client build
      viteBuild(await resolveViteConfig(false)),
      // server build
      viteBuild(await resolveViteConfig(true))
    ]);
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput];
  } catch (e) {
    console.log(e);
  }
}

async function buildIslands(
  root: string,
  islandPathToMap: Record<string, string>,
  config
) {
  // {Aside: "xxxx"}
  // 内容
  // import Aside from "xxxx"
  // window.ISLANDS = {Aside}
  // window.ISLAND_PROPS = JSON.parse(
  //   document.getElementById('island-props').textContent
  // )
  const islandInjectCode = `
    ${Object.entries(islandPathToMap)
      .map(([islandName, islandPath]) => {
        return `import ${islandName} from "${islandPath}"`;
      })
      .join('')}
    window.ISLANDS = { ${Object.keys(islandPathToMap).join(', ')} }
    window.ISLAND_PROPS = JSON.parse(
      document.getElementById('island-props').textContent
    )
  `;
  const injectId = 'island:inject';
  return viteBuild({
    mode: 'production',
    build: {
      outDir: path.join(root, 'temp'),
      rollupOptions: {
        input: injectId
      }
    },
    plugins: [
      ...(await createVitePlugins(config, undefined, true)),
      {
        name: 'island:inject',
        enforce: 'post',
        resolveId(id) {
          if (id.includes(MASK_SPLITTER)) {
            const [originId, importer] = id.split(MASK_SPLITTER);
            return this.resolve(originId, importer, { skipSelf: true });
          }
          if (id === injectId) {
            return id;
          }
        },
        load(id) {
          if (id === injectId) {
            return islandInjectCode;
          }
        },
        generateBundle(_, bundle) {
          for (const file in bundle) {
            if (bundle[file].type === 'asset') {
              delete bundle[file];
            }
          }
        }
      }
    ]
  });
}

export async function renderPage(
  render: (pagePath: string) => RenderResult,
  root: string,
  clientBundle: RollupOutput,
  routes: Route[],
  config
) {
  console.log(
    'clientBundle',
    clientBundle.output.map((chunk) => {
      return {
        type: chunk.type,
        fileName: chunk.fileName,
        isEntry: chunk.type === 'chunk' && chunk.isEntry
      };
    })
  );

  const clientChunk = clientBundle.output.filter(
    (chunk) =>
      (chunk.type === 'chunk' && chunk.isEntry) || chunk.type === 'asset'
  );

  console.log('Rendering page in server side...', routes);
  await Promise.all(
    routes.map(async (route) => {
      const routePath = route.path;

      const { appHTML, islandToPathMap, islandProps } = await render(routePath);

      await buildIslands(root, islandToPathMap, config);
      const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>title</title>
        <meta name="description" content="xxx">
        ${clientChunk
          ?.map((chunk) => {
            if (chunk.type === 'asset') {
              return `<link rel="stylesheet" href="/${chunk.fileName}">`;
            }
          })
          .join('')}
      </head>
      <body>
        <div id="root">${appHTML}</div>
        ${clientChunk
          ?.map((chunk) => {
            return `<script type="module" src="/${chunk.fileName}"></script>`;
          })
          .join('')}
      </body>
    </html>`.trim();
      const fileName = routePath.endsWith('/')
        ? `${routePath}index.html`
        : `${routePath}.html`;
      // 当前文件的文件夹路径
      await fs.ensureDir(join(root, 'build', dirname(fileName)));
      await fs.writeFile(join(root, 'build', fileName), html);
    })
  );
  // await fs.remove(join(root, 'temp'));
}

export async function build(root: string = process.cwd(), config: SiteConfig) {
  // 1. bundle - client 端 + server 端
  const [clientBundle] = await bundle(root, config);
  // 2. 引入 server-entry 模块
  const serverEntryPath = join(root, 'temp', 'ssr-entry.js');
  const { render, routes } = await import(
    pathToFileURL(serverEntryPath).toString()
  );
  // 3. 服务端渲染，产出 HTML
  await renderPage(render, root, clientBundle, routes, config);
}
