import { defineConfig } from 'vite'
import vitepressMdAssetsPlugin from './plugins/vitepress-md-assets-plugin' 
export default defineConfig({
  plugins: [vitepressMdAssetsPlugin()]
})
