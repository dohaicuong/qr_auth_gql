import { graphql, useMutation } from 'react-relay'
import { useLoginMutation } from './__generated__/useLoginMutation.graphql'

export const useLogin = () => useMutation<useLoginMutation>(graphql`
  mutation useLoginMutation($input: LoginInput!) {
    login(input: $input) {
      __typename
      ... on WrongCredentialsError { message }
      ... on MutationLoginSuccess {
        data {
          token
          user {
            username
          }
        }
      }
    }
  }
`)
