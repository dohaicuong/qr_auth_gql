import { graphql, useMutation } from 'react-relay'
import { useCreateTaskDocketMutation } from './__generated__/useCreateTaskDocketMutation.graphql'

export const useCreateTaskDocket = () => {
  return useMutation<useCreateTaskDocketMutation>(graphql`
    mutation useCreateTaskDocketMutation(
      $input: TaskDocketCreateInput!
      $connections: [ID!]!
    ) {
      taskDocketCreate(input: $input) {
        ... on MutationTaskDocketCreateSuccess {
          data {
            taskDocket
            @appendNode(
              connections: $connections
              edgeTypeName: "AccountTaskDocketsConnectionEdge"
            )
            {
              ...TaskDocketListItem_taskDocket
            }
          }
        }
      }
    }
  `)
}
