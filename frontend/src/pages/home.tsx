import { graphql, useLazyLoadQuery } from 'react-relay'
import { Button, Container, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { useLocalLogout } from '@/features/auth'
import { homeQuery } from './__generated__/homeQuery.graphql'

const HomePage = () => {
  const data = useLazyLoadQuery<homeQuery>(
    graphql`
      query homeQuery @preloadable {
        me {
          id
          username
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
  }

  return (
    <Container maxWidth='xs'>
      <Stack spacing={2}>
        <Typography variant='h3'>home page</Typography>
        <Stack direction='row' spacing={2}>
          <Typography variant='body1'>User: {data.me?.username}</Typography>
          <Button onClick={onLogout} variant='contained'>Sign out</Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default HomePage
