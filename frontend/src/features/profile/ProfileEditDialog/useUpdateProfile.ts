import { graphql, useMutation } from 'react-relay'
import { useUpdateProfileMutation } from './__generated__/useUpdateProfileMutation.graphql'

export const useUpdateProfile = () => {
  return useMutation<useUpdateProfileMutation>(graphql`
    mutation useUpdateProfileMutation($input: ProfileUpdateInput!) {
      profileUpdate(input: $input) {
        ... on MutationProfileUpdateSuccess {
          data {
            profile {
              ...ProfileCard_profile
              ...ProfileEditDialog_profile
            }
          }
        }
      }
    }
  `)
}
