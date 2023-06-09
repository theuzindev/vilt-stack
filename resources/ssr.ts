import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { DefineComponent, createSSRApp, h } from 'vue'
import { ZiggyVue } from '../vendor/tightenco/ziggy/dist/vue.m'
import { appName } from './app'

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
      resolvePageComponent(
        `./views/${name}.vue`,
        import.meta.glob<DefineComponent>('./views/**/*.vue')
      ),
    setup({ App, props, plugin }) {
      createSSRApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue, {
          // @ts-expect-error
          ...page.props.ziggy,
          // @ts-expect-error
          location: new URL(page.props.ziggy.location)
        })
    }
  })
)
