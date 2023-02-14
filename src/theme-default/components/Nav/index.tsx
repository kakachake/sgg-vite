import { usePageData } from '@runtime';
import { NavItemWithLink } from 'shared/types';
import { SwitchAppearance } from '../SwitchAppearance';
import styles from './index.module.scss';

function MenuItem(props: NavItemWithLink) {
  return (
    <div className="text-sm font-medium mx-3">
      <a href={props.link} className={styles.link}>
        {props.text}
      </a>
    </div>
  );
}

export function Nav() {
  const { siteData } = usePageData();
  const nav = siteData?.themeConfig?.nav || [];
  return (
    <header relative="~" w="full">
      <div
        flex="~"
        items="center"
        justify="between"
        className="px-8 h-14 divider-bottom"
      >
        <div>
          <a
            href="/"
            className="w-full h-full text-1rem font-semibold flex items-center"
            hover="opacity-60"
          >
            Island.js
          </a>
        </div>
        <div flex="~">
          <div flex="~">
            {nav.map((item) => {
              return <MenuItem key={item.text} {...item} />;
            })}
          </div>
          <div before="menu-item-before" flex="~">
            <SwitchAppearance />
          </div>
          <div flex="~" before="menu-item-before">
            <a href="/" className={styles['social-link-icon']}>
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}