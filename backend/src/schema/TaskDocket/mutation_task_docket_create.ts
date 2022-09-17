import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { TaskDocket } from './model_task_docket'

builder.relayMutationField(
  'taskDocketCreate',
  {
    inputFields: t => ({
      name: t.string({ required: true }),
    })
  },
  {
    errors: { types: [Error] },
    resolve: (_, { input: { name } }, { accountId }) => {
      if (!accountId) throw new Error('Please log in!')

      return prisma.taskDocket.create({
        data: {
          name,
          accountId,
        }
      })
    }
  },
  {
    outputFields: t => ({
      taskDocket: t.field({
        type: TaskDocket,
        resolve: node => node,
      })
    })
  }
)
