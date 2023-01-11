declare module 'island:site-data' {
  import type { UserConfig } from 'shared/types';
  const siteData: UserConfig;
  export default siteData;
}

declare module 'island:routes' {
  import type { RouteObject } from 'react-router-dom';
  export const routes: RouteObject[];
}
