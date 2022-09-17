import { JsonFileStore } from '@envelop/persisted-operations'
import path from 'path'

// @ts-ignore
import data from '../../frontend/data/persisted_queries.json'
console.log(JSON.stringify(data).substring(0, 1))

export const store = new JsonFileStore()
const persistedFilePath = path.resolve(__dirname, '..', '..', 'frontend', 'data', 'persisted_queries.json')
store.loadFromFileSync(persistedFilePath)
