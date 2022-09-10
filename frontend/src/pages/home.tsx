import { graphql, useLazyLoadQuery, useMutation } from 'react-relay'
import { homeQuery } from './__generated__/homeQuery.graphql'

import { OnResultFunction, QrReader } from 'react-qr-reader'
import { useEffect, useState } from 'react'
import { Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { homeAuthorizeSessionMutation } from './__generated__/homeAuthorizeSessionMutation.graphql'
import { useAuthorizeSession } from '@/features/auth/qr_login/useAuthorizeSession'

type Input = {
  id: string
}

const HomePage = () => {
  const data = useLazyLoadQuery<homeQuery>(
    graphql`
      query homeQuery {
        me {
          id
          username
        }
      }
    `,
    {}
  )

  const [authorizeSessionMutate, authorizingSession] = useAuthorizeSession()
  const [qrData, setQrData] = useState<string>()
  const { register, handleSubmit, setValue } = useForm<Input>()
  useEffect(
    () => {
      if(qrData) setValue('id', qrData)
    },
    [qrData]
  )
  const onSubmit: SubmitHandler<Input> = data => authorizeSessionMutate({
    variables: { id: data.id }
  })

  return (
    <Container maxWidth='xs'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Typography variant='h3'>home page</Typography>
          <Typography variant='body1'>User: {data.me?.username}</Typography>
          <Typography>
            Login your device with QR code
          </Typography>
          <QRReader
            onResult={result => {
              if (result) setQrData(result.getText())
            }}
          />
          <TextField
            label='session id'
            {...register('id')}
            InputLabelProps={{ shrink: true }}
            disabled={authorizingSession}
          />
          <Button
            variant='contained'
            type='submit'
            disabled={authorizingSession}
          >
            authorize
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default HomePage

type QRReaderProps = {
  onResult?: OnResultFunction
}

const QRReader: React.FC<QRReaderProps> = ({ onResult }) => (
  <Paper sx={theme => ({ padding: 0.5, background: theme.palette.grey[200] })}>
    <QrReader
      onResult={onResult}
      constraints={{}}
      videoContainerStyle={{ paddingTop: 0 }}
      videoStyle={{
        top: 'auto',
        left: 'auto',
        height: 'auto',
        position: 'relative',
      }}
    />
  </Paper>
)
