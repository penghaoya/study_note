import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'

export const backend: DefaultTheme.SidebarItem[] = [
  {
    text: 'Node.js',
    collapsed: true,
    items: [
      ...(await buildSidebar(
        path.resolve(__dirname, './../../backend/node'),
        '/backend/node/'
      ))
    ]
  },
  {
    text: 'NestJs',
    collapsed: true,
    items: [
      {
        text: 'Nestjs笔记',
        collapsed: true,
        items: await buildSidebar(
          path.resolve(__dirname, './../../backend/node/Nestjs'),
          '/backend/node/Nestjs'
        )
      },
      {
        text: '珠峰Nestjs',
        collapsed: true,
        items: await buildSidebar(
          path.resolve(__dirname, './../../backend/node/zhufeng_nest'),
          '/backend/node/zhufeng_nest'
        )
      }
    ]
  },
  {
    text: 'Golang',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../backend/golang/lanage/'),
      '/backend/golang/lanage'
    )
  }
]
