import { graphql, useLazyLoadQuery } from 'react-relay'
import { Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useLocalLogout } from '@/features/auth'
import { homeQuery } from './__generated__/homeQuery.graphql'
import { ProfileCard } from '@/features/profile/ProfileCard'
import { source } from '@/providers/relay/RelayEnvironment'
import { ProfileCreateDialog } from '@/features/profile/ProfileCreateDialog'
import { useState } from 'react'

const HomePage = () => {
  const data = useLazyLoadQuery<homeQuery>(
    graphql`
      query homeQuery @preloadable {
        me {
          id
          username
          profile {
            ...ProfileCard_profile
          }
        }
      }
    `,
    {}
  )

  const localLogout = useLocalLogout()
  const navigate = useNavigate()
  const onLogout = () => {
    localLogout()
    navigate('/auth')
    source.clear()
  }

  const [createProfileDialogOpen, setCreateProfileDialogOpen] = useState(false)

  if (!data.me) return <>Please login again!</>

  return (
    <Container maxWidth='xs'>
      <Stack spacing={2}>
        <Typography variant='h3'>home page</Typography>
        <Stack spacing={2}>
          <Typography variant='body1'>User: {data.me.username}</Typography>
          <Button onClick={onLogout} variant='contained'>Sign out</Button>
          {data.me.profile && <ProfileCard profileRef={data.me.profile} />}
          {!data.me.profile && (
            <>
              <Button
                variant='contained'
                onClick={() => setCreateProfileDialogOpen(true)}
              >
                Create Profile
              </Button>
              <ProfileCreateDialog
                open={createProfileDialogOpen}
                onClose={() => setCreateProfileDialogOpen(false)}
              />
            </>
          )}
        </Stack>
      </Stack>
    </Container>
  )
}

export default HomePage
