import { globSync } from 'glob';
import path from 'node:path';
import { normalizePath } from 'vite';

interface RouteMeta {
  routePath: string;
  absolutePath: string;
}

export class RouteService {
  #scanDir: string;
  #routeData: RouteMeta[] = [];

  constructor(scanDir: string) {
    this.#scanDir = scanDir;
  }

  async init() {
    console.log(this.#scanDir);

    const files = globSync(['**/*.{js,jsx,ts,tsx,md,mdx}'], {
      cwd: this.#scanDir,
      absolute: true,
      ignore: ['**/build/**', '**/.island/**', '**/config.ts', '**/temp/**/*']
    }).sort();
    console.log(files);

    files.forEach((file) => {
      const filePath = normalizePath(file);
      const fileRelativePath = normalizePath(
        path.relative(normalizePath(this.#scanDir), filePath)
      );
      const routePath = this.normalizeRoutePath(fileRelativePath);
      this.#routeData.push({
        routePath,
        absolutePath: filePath
      });
    });
    console.log('routeData:', this.#routeData);
  }

  generateRouteCode(ssr?: boolean) {
    return `
      import React from 'react';
      ${ssr ? '' : 'import loadable from "@loadable/component";'};
      ${this.#routeData
        .map((route, index) => {
          return ssr
            ? `import Route${index} from '${route.absolutePath}'`
            : `const Route${index} = loadable(() => import('${route.absolutePath}'));`;
        })
        .join('\n')}
      
      export const routes = [
        ${this.#routeData
          .map((route, index) => {
            return `{
            path: '${route.routePath}',
            element: React.createElement(Route${index}),
            preload: () => import('${route.absolutePath}')
          }`;
          })
          .join(',\n')}
      ]
    `;
  }

  normalizeRoutePath(raw: string) {
    const routePath = raw.replace(/\.(.*)?$/, '').replace(/index$/, '');
    return routePath.startsWith('/') ? routePath : `/${routePath}`;
  }

  getRouteMeta() {
    return this.#routeData;
  }
}
