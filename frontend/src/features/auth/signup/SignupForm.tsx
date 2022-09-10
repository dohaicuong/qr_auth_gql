import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { PayloadError } from 'relay-runtime'
import { useSignup } from './useSignup'
import { SignupInput, useSignupMutation$data } from './__generated__/useSignupMutation.graphql'

type SignupFormProps = {
  loginPath?: string
  onError?: (errors: PayloadError[]) => void
  onSignup?: (response: useSignupMutation$data) => void
}

export const SignupForm: React.FC<SignupFormProps> = ({
  loginPath = '/auth',
  onError,
  onSignup,
}) => {
  const [signupMutate, isSigningUp] = useSignup()
  const { register, handleSubmit } = useForm<SignupInput>()

  const onSubmit: SubmitHandler<SignupInput> = (input) => {
    signupMutate({
      variables: { input },
      onCompleted: (response, errors) => {
        if (errors) return onError?.(errors)
        
        onSignup?.(response)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Typography variant='h4' align='center' fontWeight={600}>
          Create an account
        </Typography>
        <TextField
          label='USERNAME'
          autoComplete='username'
          required
          disabled={isSigningUp}
          InputLabelProps={{ shrink: true }}
          {...register('username')}
        />
        <TextField
          label='PASSWORD'
          autoComplete='password'
          type='password'
          required
          disabled={isSigningUp}
          InputLabelProps={{ shrink: true }}
          {...register('password')}
        />
        <Button
          size='large'
          variant='contained'
          type='submit'
          disabled={isSigningUp}
        >
          Continue
        </Button>
        <Typography style={{ marginTop: 8 }} variant='subtitle2'>
          <Link component={RouterLink} to={loginPath}>
            Already have an account?
          </Link>
        </Typography>
        <Typography style={{ marginTop: 8 }} variant='subtitle2'>
          By registerng, you agree to our
          {' '}
          <Link>Terms of Service</Link>
          {' '}
          and
          {' '}
          <Link>Privacy Policy</Link>
          .
        </Typography>
      </Stack>
    </form>
  )
}
