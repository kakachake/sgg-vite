import { SiteConfig } from '../../shared/types';
import { normalizePath, Plugin } from 'vite';
import path, { join } from 'path';
import { PACKAGE_ROOT, RUNTIME_PATH } from 'node/constants';
import sirv from 'sirv';
import fs from 'fs-extra';

const SITE_DATA_ID = 'island:site-data';
const DEV_ROOT = 'island:dev-root';

export function pluginConfig(config: SiteConfig, restart?: () => void): Plugin {
  return {
    name: 'island:config',
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return '\0' + SITE_DATA_ID;
      }
      if (id === DEV_ROOT) {
        return '\0' + DEV_ROOT;
      }
    },
    load(id) {
      if (id === '\0' + SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`;
      }
      if (id === '\0' + DEV_ROOT) {
        return `export default ${JSON.stringify(normalizePath(process.cwd()))}`;
      }
    },
    configureServer(server) {
      const publicDir = join(config.root, 'public');
      if (fs.existsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir));
      }
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
        root: PACKAGE_ROOT,
        resolve: {
          alias: {
            '@runtime': RUNTIME_PATH,
            'theme-default': path.resolve(PACKAGE_ROOT, 'src/theme-default')
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
