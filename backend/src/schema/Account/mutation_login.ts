import { builder } from '../builder'

import { prisma } from '../../clients/prisma'

import { ErrorInterface } from '../Error'
import { signToken } from '../../clients/jwt'
import { Account } from './model_account'
import { comparePassword } from '../../clients/bcrypt'

class WrongCredentialsError extends Error {
  constructor() {
    super()

    this.message = `Wrong credentials!`
  }
}
builder.objectType(WrongCredentialsError, {
  name: 'WrongCredentialsError',
  interfaces: [ErrorInterface],
})

builder.relayMutationField(
  'login',
  {
    inputFields: t => ({
      username: t.string({ required: true }),
      password: t.string({ required: true }),
    })
  },
  {
    errors: { types: [WrongCredentialsError] },
    resolve: async (_, { input: { username, password } }) => {
      const user = await prisma.account.findUnique({ where: { username }})
      if (!user) throw new WrongCredentialsError()

      const isMatchPassword = await comparePassword(password, user.password)
      if (!isMatchPassword) throw new WrongCredentialsError()

      return user
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
