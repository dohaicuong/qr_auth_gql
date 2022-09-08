import { Variables } from 'react-relay'
import { Environment, Network, RecordSource, RequestParameters, Store } from 'relay-runtime'

const API_ENDPOINT = 'http://localhost:4000/graphql'

export const environment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
})

async function fetchRelay(params: RequestParameters, variables: Variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)
  return fetchGraphQL(params.text, variables)
}

async function fetchGraphQL(text: string | null, variables: Variables) {
  const jwt = localStorage.getItem('jwt')

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json()
}
