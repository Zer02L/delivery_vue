import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/iCore.ts'
import TemplateFabric from '@/core/fabrices/modules/TemplateFabric.ts'

const modelList: coreFunctionList = [TemplateFabric]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$fabrics = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
