import { nuxtContext } from '@nuxt/types'

export default (context: nuxtContext) => {
  class TemplateService {}

  context.$services.template = new TemplateService()
}
