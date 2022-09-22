import { lazy, Suspense, SuspenseProps } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { RelayProvider } from './providers/relay/RelayProvider'
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { SnackbarProvider } from 'notistack'

import { AuthedAppLayout } from './layouts/AuthedAppLayout'
import HomePage from './pages/home'
import QRScanPage from './pages/qr_scan'
import TaskDocketListPage from './pages/task_docket_list'
import TaskListPage from './pages/task_list'

import { UnauthedAppLayout } from './layouts/UnauthedAppLayout'
import LoginPage from './pages/auth_login'
import SignupPage from './pages/auth_signup'
import ProfilePage from './pages/profile'

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
  return (
    <ErrorBoundary fallback={<>Something went wrong!</>}>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' element={<AuthedAppLayout unauthed_redirect_to='/auth' />}>
            <Route
              index
              element={<Suspense><HomePage /></Suspense>}
            />
            <Route
              path='profile'
              element={<Suspense><ProfilePage /></Suspense>}
            />
            <Route
              path='qr-scan'
              element={<Suspense><QRScanPage /></Suspense>}
            />
            <Route
              path='task-docket'
              element={<Suspense><TaskDocketListPage /></Suspense>}
            >
              <Route
                path=':id'
                element={<Suspense><TaskListPage /></Suspense>}
              />
            </Route>
          </Route>
          <Route path='/auth' element={<UnauthedAppLayout authed_redirect_to='/' />}>
            <Route
              index
              element={<Suspense><LoginPage /></Suspense>}
            />
            <Route
              path='signup'
              element={<Suspense><SignupPage /></Suspense>}
            />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
