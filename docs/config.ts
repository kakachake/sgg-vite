import { defineConfig } from '../dist/index';

export default defineConfig({
  title: '123',
  description: '121152',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: {
      '/guide': [
        {
          text: '教程',
          items: [
            {
              text: '快速上手',
              link: '/guide/a'
            },
            {
              text: '如何安装',
              link: '/guide/b'
            },
            {
              text: '注意事项',
              link: '/guide/c'
            }
          ]
        },
        {
          text: '教程2',
          items: [
            {
              text: '快速上手',
              link: '/guide/a'
            },
            {
              text: '如何安装',
              link: '/guide/b'
            }
          ]
        }
      ]
    }
  },
  vite: {}
});
