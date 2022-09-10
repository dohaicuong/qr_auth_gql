import { Container, Paper } from '@mui/material'
import { SignupForm } from '@/features/auth/signup/SignupForm'
import { PayloadError } from 'relay-runtime'
import { useSnackbar } from 'notistack'
import { useSignupMutation$data } from '@/features/auth/signup/__generated__/useSignupMutation.graphql'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const onSignupError = (errors: PayloadError[]) => {
    errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))
  }

  const onSignupSuccess = (response: useSignupMutation$data) => {
    const { signup } = response
    switch(signup.__typename) {
      case 'UserExistError':
        enqueueSnackbar(signup.message, { variant: 'error' })
        break

      case 'MutationSignupSuccess':
        const { token, user } = signup.data
        enqueueSnackbar(`Welcome ${user.username}!`, { variant: 'success' })
        localStorage.setItem('jwt', token)
        navigate('/')
        break
    }
  }

  return (
    <Container maxWidth='sm' sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper sx={{ width: '100%', padding: 4 }}>
        <SignupForm
          loginPath='/auth'
          onError={onSignupError}
          onSignup={onSignupSuccess}
        />
      </Paper>
    </Container>
  )
}

export default SignupPage
