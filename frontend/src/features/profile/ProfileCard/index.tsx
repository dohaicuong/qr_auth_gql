import { CircularButton } from '@/components/CircularButton'
import { useLogout } from '@/features/auth/useLogout'
import { Edit, Logout } from '@mui/icons-material'
import { Avatar, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { graphql, useFragment } from 'react-relay'
import { ProfileEditDialog } from '../ProfileEditDialog'
import { ProfileCard_profile$key } from './__generated__/ProfileCard_profile.graphql'

type ProfileCardProps = {
  profileRef: ProfileCard_profile$key
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profileRef }) => {
  const profile = useFragment(
    graphql`
      fragment ProfileCard_profile on Profile {
        name
        avatar
        title
        description
        age
        ...ProfileEditDialog_profile
      }
    `,
    profileRef
  )

  const [updateDialogOpen, setUpdateDialogOpen] = useState(false)
  const onLogout = useLogout()
  
  return (
    <Paper
      style={{ marginTop: '60px', position: 'relative' }}
      sx={theme => ({ bgcolor: theme.palette.grey[900] })}
    >
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: -40 }}>
        <Avatar
          src={profile.avatar}
          sx={theme => ({
            width: 80,
            height: 80,
            bgcolor: theme.palette.grey[900],
            border: `4px solid ${theme.palette.grey[900]}`
          })}
        />
      </div>
      <Stack
        sx={{ position: 'absolute', top: 10, right: -24 }}
        spacing={1}
      >
        <CircularButton
          icon={<Edit />}
          color='primary'
          screw='right'
          title='edit profile'
          onClick={() => setUpdateDialogOpen(true)}
        />
        <ProfileEditDialog
          open={updateDialogOpen}
          onClose={() => setUpdateDialogOpen(false)}
          profileRef={profile}
        />

        <CircularButton
          icon={<Logout />}
          color='error'
          screw='left'
          title='sign out'
          onClick={onLogout}
        />
      </Stack>
      <Stack mt={2} mb={4} spacing={2} paddingX={8}>
        <Typography align='center' variant='h4' fontWeight={600}>
          {profile.name}
        </Typography>
        <Typography align='center' variant='body2'>
          {profile.title || 'Title'} - {profile.age}
        </Typography>
        <TextField
          disabled
          value={profile.description}
          multiline
          InputProps={{ disableUnderline: true }}
          variant='standard'
        />
      </Stack>
    </Paper>
  )
}
