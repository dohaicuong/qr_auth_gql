import { createServer } from '@graphql-yoga/node'
import { schema } from './schema'
import { context } from './schema/context'

const server = createServer({
  schema,
  context,
})

server.start()
