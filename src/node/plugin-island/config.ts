import { SiteConfig } from '../../shared/types';
import { normalizePath, Plugin, ViteDevServer } from 'vite';
import path from 'path';
import { PACKAGE_ROOT, RUNTIME_PATH } from 'node/constants';

const SITE_DATA_ID = 'island:site-data';

export function pluginConfig(config: SiteConfig, restart?: () => void): Plugin {
  let server: ViteDevServer | null = null;
  return {
    name: 'island:site-data',
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
    },
    configureServer(_server) {
      // 获取vite dev server实例
      server = _server;
    },
    async handleHotUpdate(ctx) {
      const customWatchedFiles = [normalizePath(config.configPath)];
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file));

      if (include(ctx.file)) {
        console.log(config.root);
        console.log(`
        ${path.relative(config.root, ctx.file)} changed, 
        restarting server...
        `);

        // 调用dev.ts中的createServer
        restart && (await restart());
      }
    },
    config() {
      return {
        resolve: {
          alias: {
            '@runtime': RUNTIME_PATH
          },
          css: {
            modules: {
              localsConvention: 'camelCaseOnly'
            }
          }
        }
      };
    }
  };
}
