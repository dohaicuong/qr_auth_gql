import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from '@graphql-yoga/node'
import { schema } from './schema'
import { context } from './schema/context'

const yogaApp = createServer({
  schema,
  context,
})

yogaApp.start()
