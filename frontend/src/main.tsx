import { createRoot } from 'react-dom/client'
import { AppRoot } from './AppRoot'

const foo = 1

const root = document.getElementById('root')
if (!root) throw new Error('Found no html with id root')

createRoot(root).render(<AppRoot />)
