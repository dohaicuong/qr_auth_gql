import { createRoot } from 'react-dom/client'

import { GraphiQL } from 'graphiql'
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import 'graphiql/graphiql.css'

const fetcher = createGraphiQLFetcher({
  url: 'http://0.0.0.0:4000/graphql',
})

const root = document.getElementById('root')
if (!root) throw new Error('No root element with id root')

createRoot(root).render(<GraphiQL fetcher={fetcher} />)
