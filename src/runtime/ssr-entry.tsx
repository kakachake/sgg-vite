import { App, initPageData } from './app';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { DataContext } from './hooks';
import { HelmetProvider } from 'react-helmet-async';

// For ssr component render

export interface RenderResult {
  appHTML: string;
  islandProps: unknown[];
  islandToPathMap: Record<string, string>;
}

export async function render(pagePath: string, helmetContext: object) {
  const pageData = await initPageData(pagePath);

  const { clearIslandData, data } = await import('./jsx-runtime.js');
  clearIslandData();

  const appHTML = renderToString(
    <HelmetProvider context={helmetContext}>
      <DataContext.Provider value={pageData}>
        <StaticRouter location={pagePath}>
          <App />
        </StaticRouter>
      </DataContext.Provider>
    </HelmetProvider>
  );
  const { islandProps, islandToPathMap } = data;
  return {
    appHTML,
    islandProps,
    islandToPathMap
  };
}

export { routes } from 'island:routes';
