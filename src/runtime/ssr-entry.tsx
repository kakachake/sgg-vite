import { App, initPageData } from './app';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { DataContext } from './hooks';
// For ssr component render

export interface RenderResult {
  appHTML: string;
  islandProps: unknown[];
  islandToPathMap: Record<string, string>;
}

export async function render(pagePath: string) {
  const pageData = await initPageData(pagePath);
  const { clearIslandData, data } = await import('./jsx-runtime.js');
  const { islandProps, islandToPathMap } = data;
  clearIslandData();
  const appHTML = renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  );
  return {
    appHTML,
    islandProps,
    islandToPathMap
  };
}

export { routes } from 'island:routes';
