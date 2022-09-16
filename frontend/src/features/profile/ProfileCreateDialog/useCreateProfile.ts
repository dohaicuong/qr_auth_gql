import { graphql, useMutation } from 'react-relay'
import { useCreateProfileMutation } from './__generated__/useCreateProfileMutation.graphql'

export const useCreateProfile = () => {
  return useMutation<useCreateProfileMutation>(
    graphql`
      mutation useCreateProfileMutation($input: ProfileCreateInput!) {
        profileCreate(input: $input) {
          ... on Error { message }
          ... on MutationProfileCreateSuccess {
            data {
              account {
                id
                profile {
                  id
                  ...ProfileCard_profile
                  ...ProfileEditDialog_profile
                }
              }
            }
          }
        }
      }
    `
  )
}
