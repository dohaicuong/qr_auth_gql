import { CircularButton, CircularButtonProps } from '@/components/CircularButton'
import { Divider, Grid, Stack } from '@mui/material'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { Home, QrCode } from '@mui/icons-material'

type NavItemProps = Omit<CircularButtonProps, 'selected'> & {
  to: string
  divided?: boolean
}

const nav_items: NavItemProps[] = [
  { to: '/', icon: <Home />, divided: true },
  { to: '/qr-scan', icon: <QrCode />, title: 'login with qr code' },
]

type AuthedAppLayoutProps = {
  to: string
}

export const AuthedAppLayout: React.FC<AuthedAppLayoutProps> = ({ to }) => {
  const jwt = localStorage.getItem('jwt')
  const location = useLocation()

  if (!jwt) return <Navigate to={to} replace />

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item sx={{ width: 72 }} container justifyContent='center' mt={2}>
        <Stack spacing={1}>
          {nav_items.map(({ to, divided, ...props }) => {
            // const isSelected = location.pathname.startsWith(to)
            const isSelected = location.pathname === to
            return (
              <>
                <Link to={to} key={to}>
                  <CircularButton {...props} selected={isSelected} />
                </Link>
                {divided && <Divider />}
              </>
            )
          })}
        </Stack>
      </Grid>
      <Grid item xs sx={theme => ({ background: theme.palette.grey[900] })}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
