import { useMemo, useState } from 'react'
import { useSubscription } from 'react-relay'
import { graphql } from 'relay-runtime'
import { useAuthSessionTokenSubscription$data } from './__generated__/useAuthSessionTokenSubscription.graphql'

export const useAuthSessionToken = (authSessionId?: string) => {
  const [token, setToken] = useState<string>()
  const config = useMemo(
    () => ({
      subscription: graphql`
        subscription useAuthSessionTokenSubscription($id: ID!) {
          authSession(id: $id)
        }
      `,
      variables: { id: authSessionId },
      onNext: (res: useAuthSessionTokenSubscription$data) => {
        setToken(res.authSession)
      }
    }),
    [authSessionId]
  )
  useSubscription(config as any)

  return token
}
