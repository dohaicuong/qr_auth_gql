import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { Task } from './model_task'

builder.relayMutationField(
  'taskUndone',
  {
    inputFields: t => ({
      id: t.globalID({ required: true })
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input: { id: { id } } }, { accountId }) => {
      const task = await prisma.task.findUnique({
        where: {
          id,
        },
        include: {
          taskDocket: true
        }
      })
      if (task?.taskDocket?.accountId !== accountId) throw new Error('Unable to modify other task')

      return prisma.task.update({
        where: { id },
        data: { isDone: false },
      })
    }
  },
  {
    outputFields: t => ({
      task: t.field({
        type: Task,
        resolve: task => task
      }),
    })
  },
)
