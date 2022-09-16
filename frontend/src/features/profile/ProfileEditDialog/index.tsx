import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { graphql, useFragment } from 'react-relay'
import { useUpdateProfile } from './useUpdateProfile'
import { ProfileEditDialog_profile$key } from './__generated__/ProfileEditDialog_profile.graphql'
import { ProfileUpdateInput } from './__generated__/useUpdateProfileMutation.graphql'

type ProfileEditDialogProps = {
  open: boolean
  onClose: () => void
  profileRef: ProfileEditDialog_profile$key
}

export const ProfileEditDialog: React.FC<ProfileEditDialogProps> = ({ open, onClose, profileRef }) => {
  const profile = useFragment(
    graphql`
      fragment ProfileEditDialog_profile on Profile {
        name
        avatar
        dob
        title
        description
      }
    `,
    profileRef
  )

  const [updateProfileMutate, updatingProfile] = useUpdateProfile()
  
  const { register, handleSubmit, control, reset } = useForm<ProfileUpdateInput>({
    defaultValues: {
      name: profile.name,
      avatar: profile.avatar,
      dob: profile.dob,
      title: profile.title,
      description: profile.description
    }
  })

  const handleClose = () => {
    onClose()
    reset({
      name: profile.name,
      avatar: profile.avatar,
      dob: profile.dob,
      title: profile.title,
      description: profile.description
    })
  }
  
  const onSubmit: SubmitHandler<ProfileUpdateInput> = input => {
    updateProfileMutate({
      variables: {
        input
      },
      onCompleted: (res, error) => {
        handleClose() 
      }
    })
  }
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          Update profile
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={2}>
            <TextField
              label='Name'
              {...register('name')}
              disabled={updatingProfile}
            />
            <TextField
              label='Avatar'
              {...register('avatar')}
              disabled={updatingProfile}
            />
            <Controller
              control={control}
              name='dob'
              render={({ field }) => (
                <DatePicker
                  label='Date of birth'
                  {...field}
                  disabled={updatingProfile}
                  renderInput={params => <TextField {...params} />}
                />
              )}
            />
            <TextField
              label='Title'
              {...register('title')}
              disabled={updatingProfile}
            />
            <TextField
              label='Description'
              multiline
              {...register('description')}
              disabled={updatingProfile}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            disabled={updatingProfile}
          >
            Close
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={updatingProfile}
          >
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
