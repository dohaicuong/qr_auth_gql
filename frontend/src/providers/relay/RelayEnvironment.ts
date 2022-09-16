import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import { fetchFn } from './fetchFn'
import { subscribeFn } from './subscribeFn'

export const source = new RecordSource()
const store = new Store(source)

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribeFn),
    store,
  })
}

export const RelayEnvironment = createRelayEnvironment()
