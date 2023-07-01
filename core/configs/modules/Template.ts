import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class Template {}

  context.$adapters.template = Template
}
