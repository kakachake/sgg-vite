import { UserConfig as ViteConfiguration } from 'vite';

export type NavItemWithLink = {
  text: string;
  link: string;
};

export interface SideBar {
  [path: string]: SideBarGroup[];
}

export interface SideBarGroup {
  text: string;
  items: SideBarItem[];
}

export type SideBarItem =
  | {
      text: string;
      link: string;
    }
  | {
      text: string;
      link?: string;
      items: SideBarItem[];
    };

export interface Footer {
  message: string;
}

export interface ThemeConfig {
  nav?: NavItemWithLink[];
  sidebar?: SideBar;
  footer?: Footer;
}

export interface UserConfig {
  title: string;
  description: string;
  themeConfig: ThemeConfig;
  vite: ViteConfiguration;
}

export interface SiteConfig {
  root: string;
  configPath: string;
  siteData: UserConfig;
}
