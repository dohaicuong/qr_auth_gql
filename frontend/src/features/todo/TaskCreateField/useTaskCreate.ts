import { graphql, useMutation } from 'react-relay'
import { useTaskCreateMutation } from './__generated__/useTaskCreateMutation.graphql'

export const useTaskCreate = () => {
  return useMutation<useTaskCreateMutation>(graphql`
    mutation useTaskCreateMutation(
      $input: TaskCreateInput!
      $connections: [ID!]!
    ) {
      taskCreate(input: $input) {
        ... on MutationTaskCreateSuccess {
          data {
            task
            @appendNode(
              connections: $connections
              edgeTypeName: "QueryTasksConnectionEdge"
            )
            {
              ...TaskListItem_task
            }
          }
        }
      }
    }
  `)
}
