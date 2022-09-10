import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PayloadError } from 'relay-runtime'
import { useLogin } from './useLogin'
import { LoginInput, useLoginMutation$data } from './__generated__/useLoginMutation.graphql'
import { Link as RouterLink } from 'react-router-dom'

type LoginFormProps = {
  onError?: (errors: PayloadError[]) => void
  onLogin?: (response: useLoginMutation$data) => void
  forgotPasswordPath?: string
  signupPath?: string
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onError,
  onLogin,
  forgotPasswordPath = 'forgot-password',
  signupPath = 'signup',
}) => {
  const { register, handleSubmit } = useForm<LoginInput>()
  const [loginMutate, isLoggingIn] = useLogin()

  const onSubmit: SubmitHandler<LoginInput> = (input) => {
    loginMutate({
      variables: { input },
      onCompleted: (response, errors) => {
        if (errors) return onError?.(errors)
        
        onLogin?.(response)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <div>
          <Typography variant='h4' align='center' fontWeight={600}>
            Welcome back!
          </Typography>
          <Typography variant='subtitle2' align='center'>
            We're so exicted to see you again!
          </Typography>
        </div>
        <TextField
          label='USERNAME'
          autoComplete='username'
          required
          disabled={isLoggingIn}
          InputLabelProps={{ shrink: true }}
          {...register('username')}
        />
        <TextField
          label='PASSWORD'
          autoComplete='password'
          type='password'
          required
          disabled={isLoggingIn}
          InputLabelProps={{ shrink: true }}
          {...register('password')}
        />
        <Typography style={{ marginTop: 4 }} variant='subtitle2'>
          <Link component={RouterLink} to={forgotPasswordPath}>
            Forgot your password
          </Link>
        </Typography>
        <Button size='large' variant='contained' type='submit' disabled={isLoggingIn}>
          Log In
        </Button>
        <Typography variant='subtitle2' style={{ marginTop: 8 }}>
          Need an account?
          {' '}
          <Link component={RouterLink} to={signupPath}>
            Register
          </Link>
        </Typography>
      </Stack>
    </form>
  )
}
