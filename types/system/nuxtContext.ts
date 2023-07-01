import { Context } from '@nuxt/types'

declare module '@nuxt/types' {
  interface nuxtContext extends Context {
    $configs: any
    $models: any
    $fabrics: any
    $adapters: any
    $api: any
    $services: any
  }
}
