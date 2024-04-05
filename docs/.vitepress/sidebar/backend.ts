import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'

export const backend: DefaultTheme.SidebarItem[] = [
  {
    text: 'Node.js',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../backend/node'),
      '/backend/node/'
    )
  },
  {
    text: 'NestJs',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../backend/node/Nestjs'),
      '/backend/node/Nestjs'
    )
  }
]
