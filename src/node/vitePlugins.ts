import { pluginIndexHtml } from './plugin-island/indexHtml';
import { pluginConfig } from './plugin-island/config';
import pluginReact from '@vitejs/plugin-react';
import { pluginRoutes } from './plugin-routes';
import { SiteConfig } from 'shared/types';
import { createMdxPlugins } from './plugin-mdx';
import pluginUnocss from 'unocss/vite';
import unocssOptions from './unocssOptions';
import path from 'path';
import { PACKAGE_ROOT } from './constants';
import babelPluginIsland from './babel-plugin-island';

export async function createVitePlugins(
  config: SiteConfig,
  restart?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginUnocss(unocssOptions),
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic',
      jsxImportSource: isSSR
        ? path.join(PACKAGE_ROOT, 'src', 'runtime')
        : 'react',
      babel: {
        plugins: [babelPluginIsland]
      }
    }),
    pluginConfig(config, restart),
    pluginRoutes({
      root: config.root,
      isSSR
    }),
    await createMdxPlugins()
  ];
}
