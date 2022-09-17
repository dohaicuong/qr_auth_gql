import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { Task } from './model_task'

builder.relayMutationField(
  'taskCreate',
  {
    inputFields: t => ({
      content: t.string({ required: true }),
    })
  },
  {
    errors: { types: [Error]},
    resolve: (_, { input: { content } }) => {
      return prisma.task.create({
        data: { content }
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
