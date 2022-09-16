import { builder } from '../builder'
import { Account } from '../Account/model_account'
import { prisma } from '../../clients/prisma'

export const Profile = builder.prismaNode('Profile', {
  findUnique: id => ({ id }),
  id: { resolve: user => user.id },
  fields: t => ({
    name: t.exposeString('name'),
    avatar: t.exposeString('avatar'),
    dob: t.expose('dob', { type: 'DateTime' }),
    title: t.expose('title', { type: 'String', nullable: true }),
    description: t.expose('description', { type: 'String', nullable: true }),
    createdAt: t.expose('createdAt', { type: 'DateTime' }),
    updatedAt: t.expose('updatedAt', { type: 'DateTime' }),
    
    accountId: t.exposeString('accountId'),
    // age: t.int({
    //   resolve: (profile) => {
    //     return new Date().getFullYear() - new Date(profile.dob).getFullYear()
    //   }
    // }),
  })
})
