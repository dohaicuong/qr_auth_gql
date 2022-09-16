import { prisma } from '../../clients/prisma'
import { builder } from '../builder'

builder.queryField('tasks', t => t.prismaConnection(
  {
    type: 'Task',
    cursor: 'id',
    resolve: query => prisma.task.findMany(query),
  }
))
