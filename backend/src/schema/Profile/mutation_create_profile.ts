import { prisma } from '../../clients/prisma'
import { Account } from '../Account/model_account'
import { builder } from '../builder'
import { Profile } from './model_profile'

builder.relayMutationField(
  'profileCreate',
  {
    inputFields: t => ({
      name: t.string({ required: true }),
      avatar: t.string({ required: true }),
      dob: t.field({ type: 'DateTime', required: true }),
      title: t.string(),
      description: t.string(),
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }, { accountId }) => {
      if (!accountId) throw new Error('Please login!')

      return prisma.profile.create({
        data: {
          accountId,
          name: input.name,
          avatar: input.avatar,
          dob: input.dob,
          title: input.title || undefined,
          description: input.description || undefined,
        }
      })
    }
  },
  {
    outputFields: t => ({
      profile: t.field({
        type: Profile,
        resolve: profile => profile
      }),
      account: t.field({
        type: Account,
        resolve: profile => prisma.account.findUnique({ where: { id: profile.accountId }}) as any
      })
    })
  }
)