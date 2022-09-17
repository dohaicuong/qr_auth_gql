import { List, ListItemButton, Stack } from '@mui/material'
import { graphql, usePaginationFragment } from 'react-relay'
import { TaskCreateField } from '../TaskCreateField'
import { TaskListItem } from '../TaskListItem'
import { TaskListPaginationQuery } from './__generated__/TaskListPaginationQuery.graphql'
import { TaskList_taskDocket$key } from './__generated__/TaskList_taskDocket.graphql'

type TaskListProps = {
  queryRef: TaskList_taskDocket$key
  taskDocketId: string
}

const TaskList: React.FC<TaskListProps> = ({ queryRef, taskDocketId }) => {
  const {
    data,
    hasNext,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment<TaskListPaginationQuery, TaskList_taskDocket$key>(
    graphql`
      fragment TaskList_taskDocket on TaskDocket
      @refetchable(queryName: "TaskListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 5 }
        cursor: { type: "ID", defaultValue: null }
      )
      {
        tasks(
          first: $count
          after: $cursor
        )
        @connection(key: "TaskList_taskDocket_tasks")
        {
          __id
          edges {
            node {
              id
              ...TaskListItem_task
            }
          }
        }
      }
    `,
    queryRef
  )

  return (
    <Stack spacing={1}>
      <TaskCreateField
        taskDocketId={taskDocketId}
        taskConnectionId={data.tasks.__id}
      />
      <List sx={{ height: 'calc(100vh - 64px - 56px - 8px)', overflow: 'auto' }}>
        {data.tasks.edges.map(edge => {
          if (!edge?.node) return
          return <TaskListItem key={edge.node.id} taskRef={edge.node} />
        })}
        {hasNext && (
          <ListItemButton
            sx={{ display: 'flex', justifyContent: 'center' }}
            disabled={isLoadingNext}
            onClick={() => loadNext(5)}
          >
            LOAD MORE
          </ListItemButton>
        )}
      </List>
    </Stack>
  )
}

export default TaskList
