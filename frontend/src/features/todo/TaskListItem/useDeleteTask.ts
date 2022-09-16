import { graphql, useMutation } from 'react-relay'
import { useDeleteTaskMutation } from './__generated__/useDeleteTaskMutation.graphql'

export const useDeleteTask = () => {
  return useMutation<useDeleteTaskMutation>(graphql`
    mutation useDeleteTaskMutation($input: TaskDeleteInput!) {
      taskDelete(input: $input) {
        ... on MutationTaskDeleteSuccess {
          data {
            task {
              id @deleteRecord
            }
          }
        }
      }
    }
  `)
}
