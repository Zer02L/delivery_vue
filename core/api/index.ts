import { nuxtContext } from '@nuxt/types'
import { coreFunctionList } from '@/types/iCore.ts'
import TemplateMethds from '@/core/api/modules/TemplateMethods.ts'

const modelList: coreFunctionList = [TemplateMethds]

export default (context: nuxtContext) => {
  class ModelsLocator {}
  context.$api = new ModelsLocator()
  modelList.forEach((fn) => fn(context))
}
