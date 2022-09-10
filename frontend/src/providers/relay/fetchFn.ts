import { FetchFunction } from 'relay-runtime'

const HTTP_ENDPOINT = 'http://localhost:4000/graphql'

export const fetchFn: FetchFunction = async (request, variables) => {
  const token = localStorage.getItem('jwt')
  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  })

  return await resp.json()
}
