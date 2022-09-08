import { builder } from './builder'

builder.queryType({})
builder.mutationType({})

import './Error'
import './Account'

export const schema = builder.toSchema()
