import { CircularButton } from '@/components/CircularButton'
import { Edit } from '@mui/icons-material'
import { Avatar, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
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
        dob
        title
        description
        ...ProfileEditDialog_profile
      }
    `,
    profileRef
  )

  const [updateDialogOpen, setUpdateDialogOpen] = useState(false)

  return (
    <Paper
      style={{ marginTop: '60px', position: 'relative' }}
      sx={theme => ({ bgcolor: theme.palette.grey[900] })}
    >
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: -40 }}>
        <Avatar
          src={profile.avatar}
          sx={theme => ({ width: 80, height: 80, bgcolor: theme.palette.grey[900] })}
        />
      </div>
      <div style={{ position: 'absolute', top: 10, right: -24 }}>
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
      </div>
      <Stack mt={2} mb={4} spacing={2} paddingX={8}>
        <Typography align='center' variant='h4' fontWeight={600}>
          {profile.name}
        </Typography>
        <Typography align='center' variant='body2'>
          {profile.title || 'Title'} - {new Date(profile.dob).getFullYear()}
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
