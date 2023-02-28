import { SideBarGroup, SideBarItem } from 'shared/types';
import Link from '../Link';
import styles from './index.module.scss';

interface SidebarProps {
  sidebarData: SideBarGroup[];
  pathname: string;
}

function Sidebar(props: SidebarProps) {
  const { sidebarData, pathname } = props;

  const renderGroupItem = (item: SideBarItem) => {
    const { text, link } = item;
    const active = pathname === link;
    return (
      <div ml="5">
        <div
          p="1"
          text="sm"
          font-medium="~"
          className={`${active ? 'text-brand' : 'text-text-2'}
        `}
        >
          <Link href={item.link}>{text}</Link>
        </div>
      </div>
    );
  };

  const renderGroup = (group: SideBarGroup) => {
    const { text, items } = group;
    return (
      <section key={text} block="~" not-first="divider-top mt-4">
        <div>
          <h2 m="t-3 b-2" text="1rem text-1" font="bold">
            {text}
          </h2>
        </div>
        <div mb="1">
          {items.map((item) => {
            return <div key={item.link}>{renderGroupItem(item)}</div>;
          })}
        </div>
      </section>
    );
  };

  return (
    <aside className={styles.sidebar}>
      <nav>
        {sidebarData.map((group) => {
          return renderGroup(group);
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
