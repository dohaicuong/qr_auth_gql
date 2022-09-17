import { builder } from '../builder'

export const TaskDocket = builder.prismaNode('TaskDocket', {
  findUnique: id => ({ id }),
  id: { resolve: task => task.id },
  fields: t => ({
    name: t.exposeString('name'),

    tasks: t.relatedConnection('tasks', { cursor: 'id' }),

    account: t.relation('account'),
    accountId: t.exposeString('accountId'),
  })
})
