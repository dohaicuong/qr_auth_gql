import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material'

import { useLoginMutation$data } from '@/features/auth/login/__generated__/useLoginMutation.graphql'
import { LoginForm } from '@/features/auth/login/LoginForm'
import { PayloadError } from 'relay-runtime'

import { QrLogin } from '@/features/auth/qr_login/QrLogin'
import { useLocalLogin } from '@/features/auth'

const LoginPage = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const localLogin = useLocalLogin()
  
  const onLoginError = (errors: PayloadError[]) => {
    errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))
  }
  
  const onLoginSuccess = (response: useLoginMutation$data) => {
    const { login } = response
    switch(login.__typename) {
      case 'WrongCredentialsError':
        enqueueSnackbar(login.message, { variant: 'error' })
        break

      case 'MutationLoginSuccess':
        const { token, user } = login.data
        enqueueSnackbar(`Welcome ${user.username}!`, { variant: 'success' })
        localLogin(token)
        navigate('/')
        break
    }
  }

  const onJwtToken = (token: string) => {
    localLogin(token)
    navigate('/')
  }

  return (
    <Container maxWidth='md' sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper sx={{ width: '100%' }}>
        <Grid container>
          <Grid item xs={7} padding={4}>
            <LoginForm
              onError={onLoginError}
              onLogin={onLoginSuccess}
              forgotPasswordPath='forgot-password'
              signupPath='signup'
            />
          </Grid>
          <Grid
            item xs
            container
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            padding={6}
          >
            <QrLogin onToken={onJwtToken} />
            <Typography align='center' variant='h5' fontWeight={600} mt={4}>
              Log in with QR Code
            </Typography>
            <Typography align='center' variant='subtitle1' mt={2}>
              Scan this with the app to log in instantly.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default LoginPage
