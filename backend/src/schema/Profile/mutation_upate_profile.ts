import { prisma } from '../../clients/prisma'
import { builder } from '../builder'
import { Profile } from './model_profile'

builder.relayMutationField(
  'profileUpdate',
  {
    inputFields: t => ({
      name: t.string(),
      avatar: t.string(),
      dob: t.field({ type: 'DateTime' }),
      title: t.string(),
      description: t.string(),
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }, { accountId }) => {
      if (!accountId) throw new Error('Please login!')

      const profile = await prisma.account.findUnique({ where: { id: accountId }}).profile()
      if (!profile) throw new Error('Profile not created!')

      return prisma.profile.update({
        where: { accountId },
        data: {
          name: input.name || undefined,
          avatar: input.avatar || undefined,
          dob: input.dob || undefined,
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
    })
  }
)