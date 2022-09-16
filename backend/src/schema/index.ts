import { builder } from './builder'
import { DateTimeResolver } from 'graphql-scalars'

export type Scalars = {
  DateTime: {
    Input: Date
    Output: Date
  }
}

builder.addScalarType('DateTime', DateTimeResolver, {})

builder.queryType({})
builder.mutationType({})
builder.subscriptionType({})

import './Error'

import './Profile'
import './AuthSession'
import './Account'

import './Todo'

export const schema = builder.toSchema()
