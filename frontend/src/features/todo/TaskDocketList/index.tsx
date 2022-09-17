import { Add } from '@mui/icons-material'
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemSecondaryAction } from '@mui/material'
import { useState } from 'react'
import { graphql, usePaginationFragment } from 'react-relay'
import { TaskDocketListItem } from '../TaskDocketListItem'
import { TaskDocketCreateDialog } from './TaskDocketCreateDialog'
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
          __id
          edges {
            node {
              id
              ...TaskDocketListItem_taskDocket
            }
          }
        }
      }
    `,
    accountRef
  )

  const [createDocketOpen, setCreateDocketOpen] = useState(false)

  return (
    <List>
      <ListItem sx={{ marginY: 2 }}>
        <ListItemSecondaryAction>
          <IconButton onClick={() => setCreateDocketOpen(true)}>
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <TaskDocketCreateDialog
        open={createDocketOpen}
        onClose={() => setCreateDocketOpen(false)}
        connectionId={data.taskDockets.__id}
      />
      <Divider />
      {data.taskDockets.edges.map(edge => {
        if (!edge?.node) return

        return <TaskDocketListItem taskDocketRef={edge.node} key={edge.node.id} />
      })}
    </List>
  )
}
