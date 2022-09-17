import { CircularButton, CircularButtonProps } from '@/components/CircularButton'
import { Divider, Grid, Stack } from '@mui/material'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { Home, List, QrCode } from '@mui/icons-material'
import { Fragment, useMemo } from 'react'



const nav_items: Omit<NavItemProps, 'index'>[] = [
  { to: '/', icon: <Home />, divided: true },
  { to: '/task-docket', icon: <List />, title: 'Todo list', color: 'primary' },
  { to: '/qr-scan', icon: <QrCode />, title: 'login with qr code', color: 'secondary' },
]

type AuthedAppLayoutProps = {
  unauthed_redirect_to: string
}

export const AuthedAppLayout: React.FC<AuthedAppLayoutProps> = ({ unauthed_redirect_to }) => {
  const jwt = localStorage.getItem('jwt')
  

  if (!jwt) return <Navigate to={unauthed_redirect_to} replace />

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        sx={{ width: 72, bgcolor: 'hsl(216,calc(var(--saturation-factor, 1)*7.2%),13.5%)' }}
        container
        justifyContent='center'
      >
        <Stack spacing={1} mt={2}>
          {nav_items.map((props, index) => (
            <NavItem
              key={props.to}
              index={index}
              {...props}
            />
          ))}
        </Stack>
      </Grid>
      <Grid item xs sx={{ bgcolor: 'hsl(223,calc(var(--saturation-factor, 1)*6.9%),19.8%)' }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

type NavItemProps = Omit<CircularButtonProps, 'selected'> & {
  to: string
  divided?: boolean
  index: number
}

const NavItem: React.FC<NavItemProps> = ({ to, divided, index, ...props }) => {
  const location = useLocation()

  // const isSelected = location.pathname.startsWith(to)
  const isSelected = useMemo(() => location.pathname === to, [location.pathname, to])

  const even = useMemo(() => (index % 2) === 0, [index])

  return (
    <>
      <Link to={to}>
        <CircularButton {...props} selected={isSelected} screw={even ? 'left' : 'right'} />
      </Link>
      {divided && <Divider />}
    </>
  )
}
