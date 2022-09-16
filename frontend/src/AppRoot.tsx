import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { RelayProvider } from './providers/relay/RelayProvider'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { SnackbarProvider } from 'notistack'
import { animated, useTransition } from 'react-spring'

import { UnauthedLayout } from './layouts/UnauthedLayout'
import LoginPage from './pages/auth_login'
import SignupPage from './pages/auth_signup'

import { AuthedAppLayout } from './layouts/AuthedAppLayout'
import HomePage from './pages/home'
import QRScanPage from './pages/qr_scan'
import TodoListPage from './pages/todo_list'

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
              <Route path='tasks' element={<TodoListPage />} />
            </Route>
            <Route path='/auth' element={<UnauthedLayout authed_redirect_to='/' />}>
              <Route index element={<LoginPage />} />
              <Route path='signup' element={<SignupPage />} />
            </Route>
          </Routes>
        </animated.div>
      </Suspense>
    </ErrorBoundary>
  ))
}
