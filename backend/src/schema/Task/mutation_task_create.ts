import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { Task } from './model_task'

builder.relayMutationField(
  'taskCreate',
  {
    inputFields: t => ({
      taskDocketId: t.globalID({ required: true }),
      content: t.string({ required: true }),
    })
  },
  {
    errors: { types: [Error]},
    resolve: async (_, { input: { content, taskDocketId: { id: taskDocketId, typename } } }, { accountId }) => {
      if (typename !== 'TaskDocket') throw new Error('Something went wrong!')

      const taskDocket = await prisma.taskDocket.findUnique({ where: { id: taskDocketId }})
      if (taskDocket?.accountId !== accountId) throw new Error('Unable to create task in other docket!')

      console.log({ taskDocketId })

      return prisma.task.create({
        data: {
          taskDocketId,
          content,
        }
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
