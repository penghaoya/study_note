import type { DefaultTheme } from 'vitepress/theme'
import { buildSidebar } from './../scripts/generateSidebar'
import path from 'path'
async function loveSidebar(title: string, dir: string) {
  return {
    text: title,
    collapsed: true,
    items: [
      ...(await buildSidebar(
        path.resolve(__dirname, `./../../daily/study/lyl/love/${dir}`),
        `/daily/study/lyl/love/${dir}`
      ))
    ]
  }
}
export const daily: DefaultTheme.SidebarItem[] = [
  {
    text: '环境安装',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../daily/appinstall'),
      '/daily/appinstall'
    )
  },
  {
    text: '提效率工具',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../daily/software'),
      '/daily/software'
    )
  },
  {
    text: '学习方法',
    collapsed: true,
    items: await buildSidebar(
      path.resolve(__dirname, './../../daily/study'),
      '/daily/study'
    )
  },
  {
    text: '生活',
    collapsed: true,
    items: [
      ...(await buildSidebar(
        path.resolve(__dirname, './../../daily/study/lyl'),
        '/daily/study/lyl'
      )),
      {
        text: '恋爱成长',
        collapsed: true,
        items: [
          ...(await buildSidebar(
            path.resolve(__dirname, './../../daily/study/lyl/love'),
            '/daily/study/lyl/love'
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
