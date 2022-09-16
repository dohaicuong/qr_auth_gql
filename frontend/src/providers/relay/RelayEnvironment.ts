import {
  Environment,
  Network,
  RecordSource,
  Store,
  RelayFeatureFlags
} from 'relay-runtime'
import { fetchFn } from './fetchFn'
import { subscribeFn } from './subscribeFn'

RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true

export const source = new RecordSource()
const store = new Store(source)

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn, subscribeFn),
    store,
  })
}

export const RelayEnvironment = createRelayEnvironment()
