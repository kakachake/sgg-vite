import { RouteService } from './RouteService';
import { describe, expect, test } from 'vitest';
import path from 'path';
import { normalizePath } from 'vite';

describe('RouteService', async () => {
  const testDir = path.resolve(__dirname, 'fixtures');
  const routeService = new RouteService(testDir);
  routeService.init();

  test('should get route meta', () => {
    const routeMeta = routeService.getRouteMeta().map((item) => ({
      ...item,
      absolutePath: item.absolutePath.replace(
        normalizePath(testDir),
        'TEST_DIR'
      )
    }));
    expect(routeMeta).toMatchInlineSnapshot(`
      [
        {
          "absolutePath": "TEST_DIR/a.mdx",
          "routePath": "/a",
        },
        {
          "absolutePath": "TEST_DIR/guide/index.mdx",
          "routePath": "/guide/",
        },
      ]
    `);
  });

  test('should generate route code', () => {
    const routeCode = routeService.generateRouteCode();
    expect(routeCode).toMatchInlineSnapshot(`
      "
            import React from 'react'
            import Route0 from 'E:/frontEnd/sgg/island-dev/src/node/plugin-routes/fixtures/a.mdx'
      import Route1 from 'E:/frontEnd/sgg/island-dev/src/node/plugin-routes/fixtures/guide/index.mdx';
            export const routes = [
              {
                  path: '/a',
                  element: React.createElement(Route0)
                },
      {
                  path: '/guide/',
                  element: React.createElement(Route1)
                }
            ]
          "
    `);
  });
});
