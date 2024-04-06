import { defineConfig } from 'vite'
import vitepressMdAssetsPlugin from './plugins/vitepress-md-assets-plugin' // 从plugins目录引入

export default defineConfig({
  plugins: [vitepressMdAssetsPlugin()]
})
