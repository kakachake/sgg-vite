import { createServer } from 'vite';

import { PACKAGE_ROOT } from './constants';
import { resolveConfig } from './config';
import { createVitePlugins } from './vitePlugins';
import type { Plugin } from 'vite';

export async function createDevServer(
  root: string,
  restart: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development');

  return createServer({
    root: PACKAGE_ROOT,
    plugins: (await createVitePlugins(config, restart)) as Plugin[],
    server: {
      fs: {
        allow: [PACKAGE_ROOT]
      }
    }
  });
}
