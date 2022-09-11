import { useEffect, useState } from 'react'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuthorizeSession } from '@/features/auth/qr_login/useAuthorizeSession'
import { QRReader } from '@/components/QRReader'

type Input = {
  id: string
}

const QRScanPage = () => {
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
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
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

export default QRScanPage
