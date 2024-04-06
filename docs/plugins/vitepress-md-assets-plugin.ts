// vitepress-md-assets-plugin.js
import { createFilter, FilterPattern } from '@rollup/pluginutils'
import type { Plugin } from 'vite'

import fs from 'fs-extra' // 确保安装了 fs-extra
import path from 'path'
import { json } from 'stream/consumers'
interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
}

export default function vitepressMdAssetsPlugin(options: Options = {}): Plugin {
  // 使用createFilter来确保我们只处理Markdown文件
  const filter = createFilter(options.include || ['**/*.md'], options.exclude)

  return {
    name: 'vitepress-md-assets',
    enforce: 'pre',
    apply: 'build', // 仅在构建阶段应用插件
    transform(src: string, id: string) {
      if (!filter(id)) return null // 只处理Markdown文件

      const imgRegex = /!\[.*?\]\((\.\/assets\/.*?\.(png|jpe?g|gif|svg))\)/gi
      let newSrc = src
      const matches = src.matchAll(imgRegex)

      for (const match of matches) {
        const [imgTag, relativePath] = match
        const absolutePath = path.resolve(path.dirname(id), relativePath)
        const outputPath = path.resolve(
          process.cwd(),
          'docs/.vitepress/dist',
          path.relative('docs', absolutePath)
        )

        // 确保输出目录存在
        fs.ensureDirSync(path.dirname(outputPath))

        // 复制文件到构建输出目录
        fs.copySync(absolutePath, outputPath)

        // 更新Markdown中的图片路径
        const newRelativePath = path
          .relative(process.cwd(), outputPath)
          .replace(/\\/g, '/')
        console.log(newRelativePath)
        newSrc = newSrc.replace(
          imgTag,
          imgTag.replace(relativePath, `/${newRelativePath}`)
        )
      }
      return {
        code: newSrc,
        map: null // 不提供source map
      }
    }
  }
}
