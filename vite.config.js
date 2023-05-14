import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/app.ts',
      ssr: 'resources/ssr.ts',
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      },
      script: {
        propsDestructure: true
      }
    }),
    autoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'resources/types/auto-imports.d.ts'
    }),
    components({
      dirs: ['resources/components', 'resources/layouts'],
      dts: 'resources/types/components.d.ts'
    })
  ]
})
