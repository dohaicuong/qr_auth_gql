import { builder } from '../builder'

export const Task = builder.prismaNode('Task', {
  findUnique: id => ({ id }),
  id: { resolve: task => task.id },
  fields: t => ({
    content: t.exposeString('content'),
    isDone: t.exposeBoolean('isDone')
  })
})
