import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/iCore.ts'
import Template from '@/core/configs/modules/Template.ts'

const modelList: coreFunctionList = [Template]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$config = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
