import { Observable, SubscribeFunction } from 'relay-runtime'

const HTTP_ENDPOINT = 'http://localhost:4000/graphql'

export const subscribeFn: SubscribeFunction = (request, variables, cacheConfig) => {
  return Observable.create(sink => {
    const url = new URL(HTTP_ENDPOINT)

    if (request.text) {
      url.searchParams.append('query', request.text)
    }

    if (request.name) {
      url.searchParams.append(
        'operationName',
        request.name,
      )
    }

    if (variables) {
      url.searchParams.append('variables', JSON.stringify(variables))
    }

    const eventsource = new EventSource(url.toString())

    eventsource.onmessage = function (event) {
      const data = JSON.parse(event.data)
      sink.next(data)
      if (eventsource.readyState === 2) {
        sink.complete()
      }
    }

    eventsource.onerror = function (error) {
      sink.error(error as any)
    }

    return () => eventsource.close()
  })
}
