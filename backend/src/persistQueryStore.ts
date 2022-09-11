import { JsonFileStore } from '@envelop/persisted-operations'
import path from 'path'

export const store = new JsonFileStore()
const persistedFilePath = path.resolve(__dirname, '..', '..', 'frontend', 'data', 'persisted_queries.json')
store.loadFromFileSync(persistedFilePath)
