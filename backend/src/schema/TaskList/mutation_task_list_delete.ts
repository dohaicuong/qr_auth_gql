import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { TaskList } from './model_task_list'

builder.relayMutationField(
  'taskListDelete',
  {
    inputFields: t => ({
      id: t.globalID({ required: true }),
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input: { id: { id, typename } } }, { accountId }) => {
      if (!accountId) throw new Error('Please log in!')

      if (typename === 'TaskList') throw new Error('Something went wrong!')

      const taskList = await prisma.taskList.findUnique({ where: { id }})
      if (!taskList) throw new Error('Unable to delete someone else list')

      return prisma.taskList.delete({ where: { id } })
    }
  },
  {
    outputFields: t => ({
      taskList: t.field({
        type: TaskList,
        resolve: node => node,
      })
    })
  }
)
