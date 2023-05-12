import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/src/app.ts',
      ssr: 'resources/src/ssr.ts',
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'resources/src/Types/auto-imports.d.ts'
    }),
    Components({
      dirs: ['resources/src/Components', 'resources/src/Layouts'],
      dts: 'resources/src/Types/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/src')
    }
  }
})
