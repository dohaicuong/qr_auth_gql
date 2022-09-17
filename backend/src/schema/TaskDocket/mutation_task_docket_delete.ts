import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { TaskDocket } from './model_task_docket'

builder.relayMutationField(
  'taskDocketDelete',
  {
    inputFields: t => ({
      id: t.globalID({ required: true }),
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input: { id: { id, typename } } }, { accountId }) => {
      if (!accountId) throw new Error('Please log in!')

      if (typename !== 'TaskDocket') throw new Error('Something went wrong!')

      const taskDocket = await prisma.taskDocket.findUnique({ where: { id }})
      if (!taskDocket) throw new Error('Unable to delete someone else list')

      return prisma.taskDocket.delete({ where: { id } })
    }
  },
  {
    outputFields: t => ({
      taskList: t.field({
        type: TaskDocket,
        resolve: node => node,
      })
    })
  }
)
