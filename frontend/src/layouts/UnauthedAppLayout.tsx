import { Navigate, Outlet } from 'react-router-dom'

type UnauthedAppLayoutProps = {
  authed_redirect_to: string
}
export const UnauthedAppLayout: React.FC<UnauthedAppLayoutProps> = ({ authed_redirect_to }) => {
  const jwt = localStorage.getItem('jwt')

  if (jwt) return <Navigate to={authed_redirect_to} replace />

  return <Outlet />
}
