import { useEffect, useState } from 'react'
import { graphql, useMutation } from 'react-relay'
import { PayloadError } from 'relay-runtime'
import { useCreateAuthSessionMutation } from './__generated__/useCreateAuthSessionMutation.graphql'

type UseCreateAuthSessionOptions = {
  onError?: (errors: PayloadError[]) => void
}

export const useCreateAuthSession = ({ onError }: UseCreateAuthSessionOptions = {}) => {
  const [authSessionId, setAuthSessionId] = useState<string>()

  const [createAuthSessionMutate] = useMutation<useCreateAuthSessionMutation>(graphql`
    mutation useCreateAuthSessionMutation {
      createAuthSession
    }
  `)

  useEffect(() => {
    createAuthSessionMutate({
      variables: {},
      onCompleted: (response, errors) => {
        if (errors) return onError?.(errors)

        setAuthSessionId(response.createAuthSession)
      },
    })
  }, [])

  return authSessionId
}
