import { graphql, useMutation } from 'react-relay'
import { useSignupMutation } from './__generated__/useSignupMutation.graphql'

export const useSignup = () => useMutation<useSignupMutation>(graphql`
  mutation useSignupMutation($input: SignupInput!) {
    signup(input: $input) {
      __typename
      ... on UserExistError { message }
      ... on MutationSignupSuccess {
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
