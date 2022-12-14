import { RelayEnvironmentProvider } from 'react-relay'
import { RelayEnvironment } from './RelayEnvironment'

export type RelayProviderProps = {
  children?: React.ReactNode
}

export const RelayProvider: React.FC<RelayProviderProps> = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {children}
    </RelayEnvironmentProvider>
  )
}
