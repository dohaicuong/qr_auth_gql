import { builder } from './builder'

builder.queryType({})
builder.mutationType({})
builder.subscriptionType({})

import './Error'
import './Account'
import './AuthSession'

export const schema = builder.toSchema()
