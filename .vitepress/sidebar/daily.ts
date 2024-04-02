import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'

export const daily: DefaultTheme.SidebarItem[] = [
  {
    text: '环境安装',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../daily/appinstall'),
      '/daily/appinstall'
    )
  }
]
