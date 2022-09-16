import { Navigate, Outlet } from 'react-router-dom'

type UnauthedLayoutProps = {
  authed_redirect_to: string
}
export const UnauthedLayout: React.FC<UnauthedLayoutProps> = ({ authed_redirect_to }) => {
  const jwt = localStorage.getItem('jwt')

  if (jwt) return <Navigate to={authed_redirect_to} replace />

  return <Outlet />
}
