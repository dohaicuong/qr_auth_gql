import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { Task } from './model_task'

builder.relayMutationField(
  'taskDone',
  {
    inputFields: t => ({
      id: t.globalID({ required: true })
    })
  },
  {
    errors: { types: [Error] },
    resolve: (_, { input: { id: { id } } }) => {
      return prisma.task.update({
        where: { id },
        data: { isDone: true },
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
