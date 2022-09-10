import { graphql, useMutation } from 'react-relay'
import { useAuthorizeSessionMutation } from './__generated__/useAuthorizeSessionMutation.graphql'

export const useAuthorizeSession = () => useMutation<useAuthorizeSessionMutation>(graphql`
  mutation useAuthorizeSessionMutation($id: ID!) {
    authorizeAuthSession(id: $id)
  }
`)
