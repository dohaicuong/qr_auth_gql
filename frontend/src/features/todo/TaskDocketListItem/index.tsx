import { Delete } from "@mui/icons-material"
import { IconButton, ListItemButton, ListItemSecondaryAction, ListItemText } from "@mui/material"
import { graphql, useFragment } from "react-relay"
import { Link } from 'react-router-dom'
import { useDeleteTaskDocket } from "./useDeleteTaskDocket"
import { TaskDocketListItem_taskDocket$key } from "./__generated__/TaskDocketListItem_taskDocket.graphql"

type TaskDocketListItemProps = {
  taskDocketRef: TaskDocketListItem_taskDocket$key
}

export const TaskDocketListItem: React.FC<TaskDocketListItemProps> = ({ taskDocketRef }) => {
  const taskDocket = useFragment(
    graphql`
      fragment TaskDocketListItem_taskDocket on TaskDocket {
        id
        name
      }
    `,
    taskDocketRef
  )

  const [deleteTaskDocketMutate, deletingTaskDocket] = useDeleteTaskDocket()
  const onDelete = () => {
    deleteTaskDocketMutate({
      variables: {
        input: { id: taskDocket.id }
      }
    })
  }

  return (
    <ListItemButton component={Link} to={taskDocket.id}>
      <ListItemText primary={taskDocket.name} />
      <ListItemSecondaryAction>
        <IconButton
          onClick={onDelete}
          disabled={deletingTaskDocket}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}
