import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useCreateProfile } from './useCreateProfile'
import { ProfileCreateInput } from './__generated__/useCreateProfileMutation.graphql'

type ProfileCreateDialogProps = {
  open: boolean
  onClose: () => void
}

export const ProfileCreateDialog: React.FC<ProfileCreateDialogProps> = ({ open, onClose }) => {
  

  const { register, handleSubmit, control, reset } = useForm<ProfileCreateInput>({
    defaultValues: {
      dob: new Date()
    }
  })
  
  const handleClose = () => {
    onClose()
    reset()
  }

  const [createProfileMutate, creatingProfile] = useCreateProfile()
  const onSubmit: SubmitHandler<ProfileCreateInput> = input => {
    createProfileMutate({
      variables: { input },
      onCompleted: (res, errors) => {
        handleClose()
      }
    })
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          Create Profile
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={2}>
            <TextField
              label='Name'
              {...register('name')}
              required
              disabled={creatingProfile}
            />
            <TextField
              label='Avatar'
              {...register('avatar')}
              required
              disabled={creatingProfile}
            />
            <Controller
              control={control}
              name='dob'
              render={({ field }) => (
                <DatePicker
                  label='Date of birth'
                  {...field}
                  disabled={creatingProfile}
                  renderInput={params => <TextField {...params} required />}
                />
              )}
            />
            <TextField
              label='Title'
              {...register('title')}
              disabled={creatingProfile}
            />
            <TextField
              label='Description'
              multiline
              {...register('description')}
              disabled={creatingProfile}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            disabled={creatingProfile}
          >
            Close
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={creatingProfile}
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
