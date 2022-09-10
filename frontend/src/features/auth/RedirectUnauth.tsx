import { Navigate, Outlet } from 'react-router-dom'

type RedirectUnauthProps = {
  to: string
}
export const RedirectUnauth: React.FC<RedirectUnauthProps> = ({ to }) => {
  const jwt = localStorage.getItem('jwt')

  if (!jwt) return <Navigate to={to} replace />

  return <Outlet />
}