import { PageModule } from 'shared/types';
import { Plugin } from 'vite';
import { RouteService } from './RouteService';

export interface Route {
  path: string;
  element: React.ReactElement;
  filePath: string;
  preload: () => Promise<PageModule>;
}

interface PluginOptions {
  root: string;
  isSSR: boolean;
}

export const CONVENTIONAL_ROUTE_ID = 'island:routes';

export function pluginRoutes(options: PluginOptions): Plugin {
  const { root } = options;
  const routerService = new RouteService(root);
  return {
    name: 'island:routes',
    resolveId(id) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return '\0' + CONVENTIONAL_ROUTE_ID;
      }
    },
    async configResolved(config) {
      await routerService.init();
    },
    async load(id) {
      if (id === '\0' + CONVENTIONAL_ROUTE_ID) {
        return routerService.generateRouteCode(options.isSSR);
      }
    }
  };
}
