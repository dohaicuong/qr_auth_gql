import { Delete } from '@mui/icons-material'
import { ListItemButton, ListItemSecondaryAction, ListItemText } from '@mui/material'
import { useCallback } from 'react'
import { graphql, useFragment } from 'react-relay'
import { useDeleteTask } from './useDeleteTask'
import { useDoneTask } from './useDoneTask'
import { useUndoneTask } from './useUndoneTask'
import { TaskListItem_task$key } from '../TaskList/__generated__/TaskListItem_task.graphql'

type TaskListItemProps = {
  taskRef: TaskListItem_task$key
}

export const TaskListItem: React.FC<TaskListItemProps> = ({ taskRef }) => {
  const task = useFragment(
    graphql`
      fragment TaskListItem_task on Task {
        id
        content
        isDone
      }
    `,
    taskRef
  )

  const [taskDoneMutate, isDoningTask] = useDoneTask()
  const [taskUndoneMutate, isUndoningTask] = useUndoneTask()
  const onTaskToggle = useCallback(
    () => {
      if (isDoningTask || isUndoningTask) return
      
      if (!task.isDone) return taskDoneMutate({ variables: { input: { id: task.id }}})

      if (task.isDone) return taskUndoneMutate({ variables: { input: { id: task.id }}})
    },
    [task.id, task.isDone, isDoningTask, isUndoningTask]
  )

  const [taskDeleteMutate, isDeletingTask] = useDeleteTask()
  const onTaskDelete = useCallback(
    () => {
      if (isDeletingTask) return

      taskDeleteMutate({ variables: { input: { id: task.id }}})
    },
    [isDeletingTask, task.id]
  )

  return (
    <ListItemButton onClick={onTaskToggle}>
      <ListItemText
        primary={task.content}
        style={task.isDone ? { textDecoration: 'line-through' } : {}}
      />
      <ListItemSecondaryAction onClick={onTaskDelete}>
        <Delete />
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}
