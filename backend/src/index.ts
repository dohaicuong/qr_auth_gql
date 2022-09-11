import { createServer } from '@graphql-yoga/node'
import { schema } from './schema'
import { context } from './schema/context'
import { usePersistedOperations } from '@envelop/persisted-operations'
import { store } from './persistQueryStore'

const yogaApp = createServer({
  schema,
  context,
  plugins: [
    usePersistedOperations({ store })
  ]
})

yogaApp.start()
