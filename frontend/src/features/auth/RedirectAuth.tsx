import { Navigate, Outlet } from 'react-router-dom'

type RedirectAuthProps = {
  to: string
}
export const RedirectAuth: React.FC<RedirectAuthProps> = ({ to }) => {
  const jwt = localStorage.getItem('jwt')

  if (jwt) return <Navigate to={to} replace />

  return <Outlet />
}
