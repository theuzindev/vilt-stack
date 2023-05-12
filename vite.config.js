import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
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
    autoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'resources/src/Types/auto-imports.d.ts'
    }),
    components({
      dirs: ['resources/src/Components', 'resources/src/Layouts'],
      dts: 'resources/src/Types/components.d.ts'
    })
  ]
})
