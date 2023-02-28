import { useLocation } from 'react-router-dom';
import { usePageData } from '@runtime';
import { SideBar, SideBarItem } from 'shared/types';

export default function usePrevNextPage() {
  const { pathname } = useLocation();
  const { siteData } = usePageData();
  const siderbar = siteData.themeConfig?.sidebar || <SideBar>{};
  const flattenSidebar: SideBarItem[] = [];
  Object.keys(siderbar).forEach((item) => {
    const siderbarItem = siderbar[item] || [];
    siderbarItem.forEach((group) => {
      flattenSidebar.push(...group.items);
    });
  });
  const idx = flattenSidebar.findIndex((item) => {
    return pathname === item.link;
  });
  console.log(flattenSidebar);

  return {
    prevPage: flattenSidebar[idx - 1] || null,
    nextPage: flattenSidebar[idx + 1] || null
  };
}
