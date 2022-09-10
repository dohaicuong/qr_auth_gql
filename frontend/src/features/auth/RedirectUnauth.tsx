import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '.'

type RedirectUnauthProps = {
  to: string
}
export const RedirectUnauth: React.FC<RedirectUnauthProps> = ({ to }) => {
  const isLoggedIn = useIsLoggedIn()

  if (!isLoggedIn) return <Navigate to={to} replace />

  return <Outlet />
}