import { builder } from '../builder'
import { Account } from './model_account'
import { ErrorInterface } from '../Error'

import { hashPassword } from '../../clients/bcrypt'
import { signToken } from '../../clients/jwt'
import { prisma } from '../../clients/prisma'

class UserExistedError extends Error {
  constructor(username: string) {
    super()

    this.message = `username ${username} is already existed`
  }
}
builder.objectType(UserExistedError, {
  name: 'UserExistError',
  interfaces: [ErrorInterface],
})

builder.relayMutationField(
  'signup',
  {
    inputFields: t => ({
      username: t.string({ required: true }),
      password: t.string({ required: true }),
    })
  },
  {
    errors: { types: [UserExistedError] },
    resolve: async (_, { input: { username, password } }) => {
      const isExisted = await prisma.account.findUnique({ where: { username }})
      if (Boolean(isExisted)) throw new UserExistedError(username)

      const hashedPassword = await hashPassword(password)

      return prisma.account.create({
        data: {
          username,
          password: hashedPassword,
        }
      })
    }
  },
  {
    outputFields: t => ({
      user: t.field({
        type: Account,
        resolve: account => account
      }),
      token: t.string({
        resolve: ({ id }) => signToken({ sub: id })
      }),
    })
  }
)