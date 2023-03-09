import { usePageData, Content } from '@runtime';
import { useLocation } from 'react-router-dom';
import Aside from '../../components/Aside';
import DocFooter from 'theme-default/components/DocFooter';
import Sidebar from 'theme-default/components/Sidebar';
import style from './index.module.scss';

function DocLayout() {
  const { siteData, toc } = usePageData();
  const { pathname } = useLocation();
  const siderbar = siteData.themeConfig?.sidebar || {};

  const matchedSidebarKey = Object.keys(siderbar).find((key) => {
    if (pathname.startsWith(key)) {
      return true;
    }
  });

  const mathedSidebar = siderbar[matchedSidebarKey] || [];
  return (
    <div>
      <Sidebar sidebarData={mathedSidebar} pathname={pathname} />
      <div className={style.content} flex="~">
        <div className={style['doc-content']}>
          <div className="island-doc">
            <Content />
          </div>
          <DocFooter />
        </div>

        <div className={style['aside-container']}>
          <Aside toc={toc} __island />
        </div>
      </div>
    </div>
  );
}

export default DocLayout;
