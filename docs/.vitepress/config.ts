import { defineConfig, DefaultTheme } from 'vitepress'
import { sidebar } from './sidebar'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

import vitepressMdAssetsPlugin from './scripts/vitepress-md-assets-plugin'
const nav: DefaultTheme.NavItem[] = [
  { text: '🛖主页', link: '/' },
  {
    text: '前端',
    items: []
  }
]

export default defineConfig({
  title: '小代的知识库',
  description: '学习笔记',
  themeConfig: {
    outline: 'deep',
    siteTitle: '知识库',
    logo: '/mylogo.svg',
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      {
        icon: {
          svg: `<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"id="Layer_1"data-name="Layer 1"viewBox="0 0 500 500"><defs><style>.cls-1{fill:#231f20}</style></defs><path class="cls-1"d="M184.735,419.676c-27.157,0-55.841-9.779-80.794-27.547C78.469,373.988,59.667,349.55,51,323.315c-8.958-27.112-6.127-52.949,7.972-72.752l7.53-10.575,19.78,37.459,26.278-4.044,4.964,32.275,47.5-7.5,1.916,32.659h19.813L203.6,356.1l23.971-12.5,3.32,14.04,23.027-8.786v37.417l-1.5,2.088c-.485.677-.97,1.331-1.466,1.986-14.539,18.882-37.973,29.282-66.021,29.331ZM65.447,272.262c-12.119,32.794,7.067,77.843,47.776,106.834,22.263,15.854,47.653,24.58,71.511,24.58h.169c22.766-.04,41.567-8.072,53.013-22.63v-8.962L219.523,379.1l-2.792-11.8-18.475,9.637-20.067-30.1H151.851l-1.768-30.1-45.934,7.25-4.973-32.335-21.725,3.343Z"/><path class="cls-1"d="M315.265,419.676h-.2c-28.048-.049-51.482-10.449-65.986-29.285-.53-.7-1.016-1.354-1.5-2.032l-1.5-2.088V348.854l23.026,8.786,3.321-14.04L296.4,356.1l16.847-25.269h19.812l1.918-32.659,47.5,7.5,4.964-32.275,26.279,4.044L433.5,239.988l7.529,10.575c14.1,19.8,16.932,45.64,7.973,72.752-8.669,26.235-27.472,50.673-52.944,68.814h0C371.107,409.9,342.421,419.676,315.265,419.676Zm-53.181-38.63c11.411,14.543,30.227,22.59,53.013,22.63h.169c23.859,0,49.247-8.725,71.511-24.58,40.709-28.992,59.9-74.04,47.777-106.834l-12,22.732-21.726-3.343-4.972,32.335-45.936-7.25-1.766,30.1H321.812l-20.068,30.1L283.269,367.3l-2.792,11.8-18.393-7.018Z"/><path class="cls-1"d="M250,214.587a8,8,0,0,1-3.133-.639c-.54-.23-13.323-5.721-22.576-13.946-9.33-8.293-15.148-20.748-15.391-21.273a8,8,0,0,1,7.262-11.356h67.676A8,8,0,0,1,291.2,178.5,68.237,68.237,0,0,1,275.52,200.1c-9.243,8.331-21.911,13.655-22.446,13.878A8.008,8.008,0,0,1,250,214.587Zm-19.444-31.214a37.967,37.967,0,0,0,4.365,4.67,72.7,72.7,0,0,0,15.1,9.721,68.3,68.3,0,0,0,14.783-9.554,45.283,45.283,0,0,0,4.6-4.837Z"/><path class="cls-1"d="M135.307,289.753c-.377-3.852-.569-7.674-.569-11.361a115.085,115.085,0,0,1,35.837-83.512,86.7,86.7,0,1,1,158.851,0,115.094,115.094,0,0,1,35.836,83.513c0,3.684-.192,7.506-.569,11.36l-15.923-1.559c.326-3.337.492-6.634.492-9.8a99.128,99.128,0,0,0-34.837-75.5l-4.875-4.162,3-5.665a70.7,70.7,0,1,0-125.094,0l3,5.665-4.876,4.162a99.131,99.131,0,0,0-34.837,75.5c0,3.168.166,6.465.493,9.8Z"/></svg>`
        },
        link: 'https://github.com/'
      }
    ],
    footer: {
      message: '少抱怨，多思考，未来更美好',
      copyright: 'Copyright © 2023-present XD'
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [vitepressMdAssetsPlugin(), groupIconVitePlugin()]
  }
})
