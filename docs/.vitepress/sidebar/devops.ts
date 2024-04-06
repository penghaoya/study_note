import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'

export const devops: DefaultTheme.SidebarItem[] = [
  {
    text: 'Linux',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../devops/Linux'),
      '/devops/Linux'
    )
  },
  {
    text: 'Docker',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../devops/Docker'),
      '/daily/Docker'
    )
  }
]
