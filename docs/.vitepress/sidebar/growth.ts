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
    text: '生活',
    collapsed: true,
    items: [
      ...(await buildSidebar(
        path.resolve(__dirname, './../../growth/lyl'),
        '/growth/lyl'
      )),
      {
        text: '恋爱成长',
        collapsed: true,
        items: [
          ...(await buildSidebar(
            path.resolve(__dirname, './../../growth/lyl/love'),
            '/growth/lyl/love'
          )),
          await loveSidebar('有关“吸引力”的展示和“好感”的产生', 'module1'),
          await loveSidebar(
            '恋爱阶段的维护，深入，以及稳定恋爱关系',
            'module2'
          ),
          await loveSidebar(
            '恋爱阶段（包括长期关系）的危机情况处理',
            'module3'
          ),
          await loveSidebar('恋爱中的自我提升和修养', 'module4')
        ]
      }
    ]
  }
]
