import SchemaBuilder from '@pothos/core'

import PrismaPlugin from '@pothos/plugin-prisma'
import RelayPlugin from '@pothos/plugin-relay'
import ErrorsPlugin from '@pothos/plugin-errors'

import { prisma } from '../clients/prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { Context } from './context'
import { Scalars } from '.'

type SchemaBuilderType = {
  PrismaTypes: PrismaTypes
  Context: Context
  Scalars: Scalars
}

export const builder = new SchemaBuilder<SchemaBuilderType>({
  plugins: [PrismaPlugin, RelayPlugin, ErrorsPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'ID',
  },
  errorOptions: {
    defaultTypes: [],
  },
})
