import { routes } from 'island:routes';
import { Route } from 'node/plugin-routes';
import { matchRoutes } from 'react-router-dom';
import { PageData } from 'shared/types';
import { Layout } from '../theme-default';
import siteData from 'island:site-data';

export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath);

  if (matched) {
    const route = matched[0].route as Route;

    const moduleInfo = await route.preload();

    return {
      pageType: moduleInfo.frontmatter?.pageType ?? 'doc',
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc,
      title: moduleInfo.title
    };
    // 获取路由组件编译后的模块内容
  }

  return {
    pageType: '404',
    siteData,
    pagePath: routePath,
    title: '404'
  };
}

export function App() {
  return <Layout />;
}
