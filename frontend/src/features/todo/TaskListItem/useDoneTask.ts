import { graphql, useMutation } from 'react-relay'
import { useDoneTaskMutation } from './__generated__/useDoneTaskMutation.graphql'

export const useDoneTask = () => {
  return useMutation<useDoneTaskMutation>(graphql`
    mutation useDoneTaskMutation($input: TaskDoneInput!) {
      taskDone(input: $input) {
        ... on MutationTaskDoneSuccess {
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
