import { Send } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTaskCreate } from './useTaskCreate'
import { TaskCreateInput } from './__generated__/useTaskCreateMutation.graphql'

type TaskCreateFieldProps = {
  taskConnectionId: string
  taskDocketId: string
}

export const TaskCreateField: React.FC<TaskCreateFieldProps> = ({ taskConnectionId, taskDocketId }) => {
  const [taskCreateMutate, taskCreating] = useTaskCreate()

  const ref = useRef<HTMLInputElement>()

  const { register, handleSubmit, reset } = useForm<TaskCreateInput>()
  const onSubmit: SubmitHandler<TaskCreateInput> = (input) => {
    if (!input.content) return

    taskCreateMutate({
      variables: {
        connections: [taskConnectionId],
        input: {
          taskDocketId,
          content: input.content,
        }
      },
      onCompleted: (res, errors) => {
        if (!errors?.length) {
          reset()
          console.log(ref.current?.focus)
          ref.current?.focus()
        } 
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder='what to do?'
        autoComplete='new_task_content'
        required
        disabled={taskCreating}
        fullWidth
        autoFocus
        inputRef={ref}
        {...register('content')}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton type='submit'>
                <Send />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}