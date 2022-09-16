import { graphql, useMutation } from 'react-relay'
import { useUndoneTaskMutation } from './__generated__/useUndoneTaskMutation.graphql'

export const useUndoneTask = () => {
  return useMutation<useUndoneTaskMutation>(graphql`
    mutation useUndoneTaskMutation($input: TaskUndoneInput!) {
      taskUndone(input: $input) {
        ... on MutationTaskUndoneSuccess {
          data {
            task {
              isDone
            }
          }
        }
      }
    }
  `)
}
