import { Navigate, Outlet } from 'react-router-dom'
import { useIsLoggedIn } from '.'

type RedirectAuthProps = {
  to: string
}
export const RedirectAuth: React.FC<RedirectAuthProps> = ({ to }) => {
  const isLoggedIn = useIsLoggedIn()

  if (isLoggedIn) return <Navigate to={to} replace />

  return <Outlet />
}
