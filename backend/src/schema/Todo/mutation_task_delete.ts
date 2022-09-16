import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { Task } from './model_task'

builder.relayMutationField(
  'taskDelete',
  {
    inputFields: t => ({
      id: t.globalID({ required: true })
    })
  },
  {
    errors: { types: [Error] },
    resolve: (_, { input: { id: { id } } }) => {
      return prisma.task.delete({
        where: { id }
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
