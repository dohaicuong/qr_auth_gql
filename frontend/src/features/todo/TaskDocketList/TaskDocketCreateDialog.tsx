import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateTaskDocket } from './useCreateTaskDocket'
import { TaskDocketCreateInput } from './__generated__/useCreateTaskDocketMutation.graphql'

type TaskDocketCreateDialogProps = {
  open: boolean
  onClose: () => void
  connectionId: string
}

export const TaskDocketCreateDialog: React.FC<TaskDocketCreateDialogProps> = ({ open, onClose, connectionId }) => {
  const handleClose = () => onClose()

  const [createTaskDocketMutate, creatingTaskDocket] = useCreateTaskDocket()
  const { register, handleSubmit, reset } = useForm<TaskDocketCreateInput>()

  const onSubmit: SubmitHandler<TaskDocketCreateInput> = input => {
    createTaskDocketMutate({
      variables: {
        input,
        connections: [connectionId]
      },
      onCompleted: () => {
        handleClose()
        reset()
      }
    })
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          Create task docket
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={2}>
            <TextField
              label='Name'
              required
              {...register('name')}
              disabled={creatingTaskDocket}
              autoFocus
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            disabled={creatingTaskDocket}
          >
            Close
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={creatingTaskDocket}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
