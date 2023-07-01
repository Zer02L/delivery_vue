import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/iCore.ts'
import TemplateService from '@/core/services/modules/TemplateService.ts'

const modelList: coreFunctionList = [TemplateService]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$services = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
