import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/iCore.ts'
import TemplateAdapter from '@/core/adapters/modules/TemplateAdapter.ts'

const modelList: coreFunctionList = [TemplateAdapter]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$models = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
