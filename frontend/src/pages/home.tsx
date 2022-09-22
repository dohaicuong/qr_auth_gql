import { graphql, useLazyLoadQuery } from 'react-relay'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'

import { homeQuery } from './__generated__/homeQuery.graphql'
import { CircularButton } from '@/components/CircularButton'
import { Person } from '@mui/icons-material'
import { useLogout } from '@/features/auth/useLogout'

const HomePage = () => {
  const data = useLazyLoadQuery<homeQuery>(
    graphql`
      query homeQuery @preloadable {
        me {
          username
        }
      }
    `,
    {}
  )

  const onLogout = useLogout()

  if (!data.me) return <>Please login again!</>

  return (
    <Container maxWidth='sm'>
      <Stack spacing={2}>
        <Typography variant='h3'>home page</Typography>
        <Stack spacing={2}>
          <Typography variant='body1'>User: {data.me.username}</Typography>
          <Button onClick={onLogout} variant='contained'>Sign out</Button>
        </Stack>
      </Stack>
      <Grid container>
        <Grid item xs={4} sx={{ padding: 4 }}>
          <CircularButton
            size='large'
            color='primary'
            icon={<Person fontSize='large' />}
          />
        </Grid>
        <Grid item xs={4} sx={{ padding: 4 }} container justifyContent='center'>
          <CircularButton
            size='large'
            color='secondary'
            screw='right'
            icon={<Person fontSize='large' />}
          />
          <Typography align='center' mt={1} variant='body2'>
            Profile
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ padding: 4 }}>
          <CircularButton
            size='large'
            color='error'
            icon={<Person fontSize='large' />}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage
