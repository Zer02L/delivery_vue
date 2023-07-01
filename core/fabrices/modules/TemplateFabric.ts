import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateFabric {}

  context.$adapters.template = TemplateFabric
}
