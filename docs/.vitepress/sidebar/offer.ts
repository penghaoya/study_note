import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from '../scripts/generateSidebar'
import path from 'path'

export const offer: DefaultTheme.SidebarItem[] = [
  {
    text: '找工作准备',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../offer'),
      '/offer'
    )
  }
]
