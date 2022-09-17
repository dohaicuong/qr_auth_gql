import { graphql, usePaginationFragment } from 'react-relay'
import { TaskDocketListPaginationQuery } from './__generated__/TaskDocketListPaginationQuery.graphql'
import { TaskDocketList_me$key } from './__generated__/TaskDocketList_me.graphql'

type TaskDocketListProps = {
  accountRef: any
}

export const TaskDocketList: React.FC<TaskDocketListProps> = ({ accountRef }) => {
  const {
    data
  } = usePaginationFragment<TaskDocketListPaginationQuery, TaskDocketList_me$key>(
    graphql`
      fragment TaskDocketList_me on Account
      @refetchable(queryName: "TaskDocketListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 5 }
        cursor: { type: "ID", defaultValue: null }
      )
      {
        taskDockets(
          first: $count
          after: $cursor
        )
        @connection(
          key: "TaskDocketList_me_taskDockets"
        )
        {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    accountRef
  )
  console.log(data)

  return (
    <>
      task docket list
    </>
  )
}
