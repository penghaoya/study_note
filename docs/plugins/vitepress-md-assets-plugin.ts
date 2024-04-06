import { createFilter, FilterPattern } from '@rollup/pluginutils'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import path from 'path'

interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
  // 新增配置选项
  outputDir?: string // 构建输出目录
  docsDir?: string // 文档源文件目录
}

export default function vitepressMdAssetsPlugin(options: Options = {}): Plugin {
  const filter = createFilter(options.include || ['**/*.md'], options.exclude)
  // 使用用户提供的目录或默认值
  const outputDir = options.outputDir || 'docs/.vitepress/dist'
  const docsDir = options.docsDir || 'docs'

  return {
    name: 'vitepress-md-assets',
    enforce: 'pre',
    apply: 'build',
    transform(src: string, id: string) {
      if (!filter(id)) return null

      const imgRegex = /!\[.*?\]\((\.\/assets\/.*?\.(png|jpe?g|gif|svg))\)/gi
      let newSrc = src

      for (const match of src.matchAll(imgRegex)) {
        const [imgTag, relativePath] = match
        const absolutePath = path.resolve(path.dirname(id), relativePath)
        const relativeToDocs = path.relative(docsDir, absolutePath)
        const outputPath = path.resolve(
          process.cwd(),
          outputDir,
          relativeToDocs
        )

        // 确保输出目录存在
        fs.ensureDirSync(path.dirname(outputPath))

        // 复制文件到构建输出目录
        fs.copySync(absolutePath, outputPath)

        // 更新Markdown中的图片路径
        const newRelativePath = path
          .relative(process.cwd(), outputPath)
          .replace(/\\/g, '/')
        newSrc = newSrc.replace(
          imgTag,
          imgTag.replace(relativePath, `/${newRelativePath}`)
        )
      }
      return { code: newSrc, map: null }
    }
  }
}
