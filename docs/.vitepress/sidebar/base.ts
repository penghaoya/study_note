import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'

const baseDir = path.resolve(__dirname, './../../web/framework')

export const web: DefaultTheme.SidebarItem[] = [
  {
    text: '🚨前端基础',
    link: '/web/',
    collapsed: true,
    items: [
      {
        text: 'HTML',
        collapsed: true,
        items: await buildSidebar(
          path.join(__dirname, './../../web/base/js'),
          '/web/base/js'
        )
      },
      {
        text: 'Css',
        collapsed: true,
        items: await buildSidebar(
          path.join(__dirname, './../../web/base/js'),
          '/web/base/js'
        )
      },
      {
        text: 'JavaScript',
        collapsed: true,
        items: await buildSidebar(
          path.join(__dirname, './../../web/base/js'),
          '/web/base/js'
        )
      },
      {
        text: 'TavaScript',
        collapsed: true,
        items: await buildSidebar(
          path.join(__dirname, './../../web/base/typescript'),
          '/web/base/typescript'
        )
      }
    ]
  },
  {
    text: '📦工程化',
    collapsed: true,
    items: [
      { text: 'Webpack', items: [{ text: '快速入门' }] },
      { text: 'Vite', items: [{ text: '快速入门' }] }
    ]
  },
  {
    text: '👌框架',
    collapsed: true,
    items: [
      {
        text: 'Vue',
        collapsed: true,
        items: await buildSidebar(
          path.join(baseDir, 'vue'),
          '/web/framework/vue'
        )
      },
      {
        text: 'React',
        collapsed: true,
        items: await buildSidebar(
          path.join(baseDir, 'react'),
          '/web/framework/react'
        )
      }
    ]
  }
]
