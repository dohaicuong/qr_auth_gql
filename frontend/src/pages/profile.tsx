import { useLogout } from '@/features/auth/useLogout'
import { ProfileCard } from '@/features/profile/ProfileCard'
import { ProfileCreateDialog } from '@/features/profile/ProfileCreateDialog'
import { Button, Container, Stack } from '@mui/material'
import { useState } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { profilePageQuery } from './__generated__/profilePageQuery.graphql'

const ProfilePage = () => {
  const data = useLazyLoadQuery<profilePageQuery>(
    graphql`
      query profilePageQuery {
        me {
          profile {
            ...ProfileCard_profile
          }
        }
      }
    `,
    {}
  )

  const onLogout = useLogout()

  const [createProfileDialogOpen, setCreateProfileDialogOpen] = useState(false)

  if (!data.me) return <>Please login again!</>

  return (
    <Container
      maxWidth='xs'
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2} mt={-24}>
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
    </Container>
  )
}

export default ProfilePage
