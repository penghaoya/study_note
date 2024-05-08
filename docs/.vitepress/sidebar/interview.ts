import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from '../scripts/generateSidebar'
import path from 'path'

export const interview: DefaultTheme.SidebarItem[] = [
  {
    text: '网络面试题',
    collapsed: true,
    items: [
      {
        text: '网络面试题',
        collapsed: true,
        link: '/interview/网络/网络面试题'
      }
    ]
  }
]
