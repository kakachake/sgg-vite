import { defineConfig } from '../dist';

export default defineConfig({
  title: '123',
  description: '121152',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide' }
    ]
  },
  vite: {}
});
