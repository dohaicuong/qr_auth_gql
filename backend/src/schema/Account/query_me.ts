import { prisma } from '../../clients/prisma'
import { builder } from '../builder'
import { Account } from './model_account'

builder.queryField('me', t => t.field({
  type: Account,
  description: 'User with jwt',
  nullable: true,
  resolve: (_, __, { accountId }) => {
    if (!accountId) return
    return prisma.account.findUnique({ where: { id: accountId }}) 
  }
}))
