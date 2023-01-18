import { Content } from '@runtime';
import { usePageData } from '@runtime';
import 'uno.css';

export function Layout() {
  const pageData = usePageData();
  const { pageType } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <div>主页</div>;
    } else if (pageType === 'doc') {
      return <Content />;
    } else {
      return <div>404</div>;
    }
  };
  return (
    <div>
      <div>头部</div>
      {getContent()}
    </div>
  );
}
