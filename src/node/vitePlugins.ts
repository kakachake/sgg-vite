import { pluginIndexHtml } from './plugin-island/indexHtml';
import { pluginConfig } from './plugin-island/config';
import pluginReact from '@vitejs/plugin-react';
import { pluginRoutes } from './plugin-routes';
import { SiteConfig } from 'shared/types';
import { createMdxPlugins } from './plugin-mdx';

export async function createVitePlugins(
  config: SiteConfig,
  restart?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginIndexHtml(),
    pluginReact({ jsxRuntime: 'automatic' }),
    pluginConfig(config, restart),
    pluginRoutes({
      root: config.root,
      isSSR
    }),
    await createMdxPlugins()
  ];
}
