import { Paper } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import logoSrc from './logo.png'

type QRCodeProps = {
  size?: number
  padding?: number
  value: string

  logo?: string
  logoSize?: number
}

export const QRCode: React.FC<QRCodeProps> = ({
  size = 176,
  padding = 1,
  value,
  logo = logoSrc,
  logoSize = 48,
}) => {

  return (
    <Paper
      sx={theme => ({
        background: theme.palette.grey['100'],
        padding,
        width: size + padding * 8 * 2,
        height: size + padding * 8 * 2,
      })}
    >
      <QRCodeSVG
        value={value}
        size={size}
        imageSettings={{
          src: logo,
          x: undefined,
          y: undefined,
          height: logoSize,
          width: logoSize,
          excavate: false,
        }}
      />
    </Paper>
  )
}
