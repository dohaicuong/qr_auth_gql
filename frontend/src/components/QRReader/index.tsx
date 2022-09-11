import { Paper } from '@mui/material'
import { OnResultFunction, QrReader } from 'react-qr-reader'

export type QRReaderProps = {
  onResult?: OnResultFunction
}

export const QRReader: React.FC<QRReaderProps> = ({ onResult }) => (
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
