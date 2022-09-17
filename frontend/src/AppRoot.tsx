import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { RelayProvider } from './providers/relay/RelayProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { SnackbarProvider } from 'notistack'

import { AuthedAppLayout } from './layouts/AuthedAppLayout'
import { UnauthedAppLayout } from './layouts/UnauthedAppLayout'

const LoginPage = lazy(() => import('./pages/auth_login'))
const SignupPage = lazy(() => import('./pages/auth_signup'))

const HomePage = lazy(() => import('./pages/home'))
const QRScanPage = lazy(() => import('./pages/qr_scan'))
const TaskDocketListPage = lazy(() => import('./pages/task_docket_list'))
const TaskListPage = lazy(() => import('./pages/task_list'))

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
              element={
                <Suspense>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path='qr-scan'
              element={
                <Suspense>
                  <QRScanPage />
                </Suspense>
              }
            />
            <Route
              path='task-docket'
              element={
                <Suspense>
                  <TaskDocketListPage />
                </Suspense>
              }
            >
              <Route
                path=':id'
                element={
                  <Suspense>
                    <TaskListPage />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path='/auth' element={<UnauthedAppLayout authed_redirect_to='/' />}>
            <Route index element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
