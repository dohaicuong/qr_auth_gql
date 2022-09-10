import { CircularProgress, Paper } from '@mui/material'
import { QRCode } from '@/components/QRCode'
import { useAuthSessionToken } from './useAuthSessionToken'
import { useCreateAuthSession } from './useCreateAuthSession'
import { useEffect } from 'react'

type QrLoginProps = {
  onToken?: (token: string) => void
}

export const QrLogin: React.FC<QrLoginProps> = ({ onToken }) => {
  const authSessionId = useCreateAuthSession()

  const jwtToken = useAuthSessionToken(authSessionId)
  useEffect(() => {
    if (jwtToken) onToken?.(jwtToken)
  }, [jwtToken])

  if (!authSessionId) return (
    <Paper sx={{ height: 192, display: 'flex', alignItems: 'center' }}>
      <CircularProgress />
    </Paper>
  )

  return <QRCode value={authSessionId} />
}