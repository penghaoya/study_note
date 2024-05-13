import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'
async function loveSidebar(title: string, dir: string) {
  return {
    text: title,
    collapsed: true,
    items: [
      ...(await buildSidebar(
        path.resolve(__dirname, `./../../growth/lyl/love/${dir}`),
        `/growth/lyl/love/${dir}`
      ))
    ]
  }
}
export const growth: DefaultTheme.SidebarItem[] = [
  {
    text: '恋爱成长',
    collapsed: true,
    items: [
      {
        text: '恋爱成长-学习',
        collapsed: true,
        items: [
          ...(await buildSidebar(
            path.resolve(__dirname, './../../growth/lyl/love'),
            '/growth/lyl/love'
          )),
          await loveSidebar('吸引力好感如何产生', 'module1'),
          await loveSidebar('恋爱阶段的维护', 'module2'),
          await loveSidebar('恋爱阶段危机情况处理', 'module3'),
          await loveSidebar('自我提升和修养', 'module4')
        ]
      }
      // {
      //   text: '思考复盘',
      //   collapsed: true,
      //   items: [
      //     ...(await buildSidebar(
      //       path.resolve(__dirname, './../../growth/lyl/think'),
      //       '/growth/lyl/think'
      //     ))
      //   ]
      // }
    ]
  }
]
