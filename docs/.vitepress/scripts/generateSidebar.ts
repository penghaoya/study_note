import fs from 'node:fs/promises'
import path from 'node:path'

export async function buildSidebar(
  directory: string,
  basePath: string = ''
): Promise<any[]> {
  const items = await fs.readdir(directory)
  // 对文件名进行排序
  const sortedItems = items.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  )
  const result = await Promise.all(
    sortedItems.map(async item => {
      const itemPath = path.join(directory, item)
      const itemStat = await fs.stat(itemPath)
      if (!itemStat.isDirectory() && item.endsWith('.md')) {
        // 提取文件名作为text，去掉序号和扩展名
        const text = item.replace(/^\d+\./, '').replace(/\.md$/, '')
        // 构建相对于基础路径的链接
        const link = `${basePath}/${item.replace(/\.md$/, '')}`
        return { text, link }
      }
    })
  )
  return result.filter(Boolean) as any[]
}

// export async function buildSidebar001(
//   directory: string,
//   basePath: string = ''
// ): Promise<any[]> {
//   const items = await fs.readdir(directory)
//   // 对文件名进行排序
//   const sortedItems = items.sort((a, b) =>
//     a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
//   )
//   const result = await Promise.all(
//     sortedItems.map(async item => {
//       const itemPath = path.join(directory, item)
//       const itemStat = await fs.stat(itemPath)

//       if (itemStat.isDirectory()) {
//         // 如果是目录，则递归调用buildSidebar函数
//         const children = await buildSidebar(itemPath, path.join(basePath, item))
//         if (children.length > 0) {
//           // 只有当目录非空时，才将其添加到侧边栏配置中
//           return {
//             text: item, // 目录名作为text
//             collapsed: false,
//             items: children // 子目录或文件作为items
//           }
//         }
//       } else if (item.endsWith('.md') && item.toLowerCase() !== 'readme.md') {
//         // 如果是Markdown文件（并且不是README.md），提取文件名作为text
//         const text = item.replace(/^\d+\./, '').replace(/\.md$/, '')
//         // 构建相对于基础路径的链接
//         const link = path
//           .join(basePath, item.replace(/\.md$/, ''))
//           .replace(/\\/g, '/')
//         return { text, link }
//       }
//     })
//   )
//   // 过滤掉undefined项，并返回结果
//   return result.filter(Boolean) as any[]
// }
