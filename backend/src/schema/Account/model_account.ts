import { builder } from '../builder'

export const Account = builder.prismaNode('Account', {
  findUnique: id => ({ id }),
  id: { resolve: user => user.id },
  fields: t => ({
    username: t.exposeString('username'),

    profile: t.relation('profile', { nullable: true }),
    
    taskDockets: t.relatedConnection(
      'taskDockets',
      { cursor: 'id' },
    ),
  })
})
