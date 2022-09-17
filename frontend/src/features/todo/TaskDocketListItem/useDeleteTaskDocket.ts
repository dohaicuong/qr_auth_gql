import { graphql, useMutation } from "react-relay"
import { useDeleteTaskDocketMutation } from "./__generated__/useDeleteTaskDocketMutation.graphql"

export const useDeleteTaskDocket = () => {
  return useMutation<useDeleteTaskDocketMutation>(graphql`
    mutation useDeleteTaskDocketMutation($input: TaskDocketDeleteInput!) {
      taskDocketDelete(input: $input) {
        ... on MutationTaskDocketDeleteSuccess {
          data {
            taskDocket {
              id @deleteRecord
            }
          }
        }
      }
    }
  `)
}
