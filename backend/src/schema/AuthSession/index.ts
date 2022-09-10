import { pubsub } from '../../clients/pubsub'
import { builder } from '../builder'
import { v4 as uuid } from 'uuid'
import { signToken } from '../../clients/jwt'

builder.mutationField('createAuthSession', t => t.field({
  type: 'String',
  resolve: () => uuid()
}))

builder.subscriptionField('authSession', t => t.field({
  type: 'String',
  args: {
    id: t.arg.id({ required: true })
  },
  subscribe: (_, { id }) => pubsub.subscribe(`AuthSession:${id}`),
  resolve: payload => payload
}))

builder.mutationField('authorizeAuthSession', t => t.field({
  type: 'Boolean',
  args: {
    id: t.arg.id({ required: true })
  },
  resolve: (_, { id }, { accountId }) => {
    if (!accountId) return false

    const token = signToken({ sub: accountId })
    pubsub.publish(`AuthSession:${id}`, token)
    return true
  }
}))
