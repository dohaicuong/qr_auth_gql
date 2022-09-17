import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { RelayProvider } from './providers/relay/RelayProvider'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { SnackbarProvider } from 'notistack'
import { animated, useTransition } from 'react-spring'

import { AuthedAppLayout } from './layouts/AuthedAppLayout'
import { UnauthedAppLayout } from './layouts/UnauthedAppLayout'
import TaskDocketListPage from './pages/task_docket_list'
import TaskListPage from './pages/task_list'

const LoginPage = lazy(() => import('./pages/auth_login'))
const SignupPage = lazy(() => import('./pages/auth_signup'))

const HomePage = lazy(() => import('./pages/home'))
const QRScanPage = lazy(() => import('./pages/qr_scan'))
const TodoListPage = lazy(() => import('./pages/task_list'))

export const AppRoot = () => (
  <RelayProvider>
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3}>
          <Routing />          
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </RelayProvider>
)

const Routing = () => {
  const location = useLocation()
  const transitions = useTransition(location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions((props, item) => (
    <ErrorBoundary fallback={<>Something went wrong!</>}>
      <Suspense fallback='Loading...'>
        <animated.div style={props}>
          <Routes location={item}>
            <Route path='/' element={<AuthedAppLayout unauthed_redirect_to='/auth' />}>
              <Route index element={<HomePage />} />
              <Route path='qr-scan' element={<QRScanPage />} />
              <Route path='task-docket' element={<TaskDocketListPage />}>
                <Route path=':id' element={<TaskListPage />} />
              </Route>
            </Route>
            <Route path='/auth' element={<UnauthedAppLayout authed_redirect_to='/' />}>
              <Route index element={<LoginPage />} />
              <Route path='signup' element={<SignupPage />} />
            </Route>
          </Routes>
        </animated.div>
      </Suspense>
    </ErrorBoundary>
  ))
}
