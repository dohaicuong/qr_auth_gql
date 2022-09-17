import { builder } from '../builder'
import { prisma } from '../../clients/prisma'
import { TaskList } from './model_task_list'

builder.relayMutationField(
  'taskListCreate',
  {
    inputFields: t => ({
      name: t.string({ required: true }),
    })
  },
  {
    errors: { types: [Error] },
    resolve: (_, { input: { name } }, { accountId }) => {
      if (!accountId) throw new Error('Please log in!')

      return prisma.taskList.create({
        data: {
          name,
          accountId,
        }
      })
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
