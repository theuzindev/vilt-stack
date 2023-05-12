import Vue from '@vitejs/plugin-vue'
import Laravel from 'laravel-vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Laravel({
      input: 'resources/src/app.ts',
      ssr: 'resources/src/ssr.ts',
      refresh: true
    }),
    Vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: 'resources/src/Types/auto-imports.d.ts',
      vueTemplate: true
    }),
    Components({
      dirs: ['resources/src/Components', 'resources/src/Layouts'],
      dts: 'resources/src/Types/components.d.ts'
    })
  ]
})
