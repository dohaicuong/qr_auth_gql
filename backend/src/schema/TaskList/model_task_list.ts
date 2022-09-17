import { builder } from '../builder'

export const TaskList = builder.prismaNode('TaskList', {
  findUnique: id => ({ id }),
  id: { resolve: task => task.id },
  fields: t => ({
    name: t.exposeString('name'),

    task: t.relation('tasks'),

    account: t.relation('account'),
    accountId: t.exposeString('accountId'),
  })
})
