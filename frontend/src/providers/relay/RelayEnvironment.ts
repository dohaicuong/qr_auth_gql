import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import { fetchFn } from './fetchFn'
import { subscribeFn } from './subscribeFn'

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribeFn),
    store: new Store(new RecordSource()),
  })
}

export const RelayEnvironment = createRelayEnvironment()
