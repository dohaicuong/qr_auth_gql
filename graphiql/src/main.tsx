import { createRoot } from 'react-dom/client'

import { GraphiQL } from 'graphiql'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
// import { createClient } from 'graphql-ws'
// import { createClient } from 'graphql-sse'
import 'graphiql/graphiql.css'

const fetcher = createGraphiQLFetcher({
  url: 'http://0.0.0.0:4000/graphql',
  // wsClient: createClient({
  //   url: 'ws://0.0.0.0:4000/graphql',
  //   lazy: false,
  // }),
})

const root = document.getElementById('root')
if (!root) throw new Error('No root element with id root')

createRoot(root).render(<GraphiQL fetcher={fetcher} />)
