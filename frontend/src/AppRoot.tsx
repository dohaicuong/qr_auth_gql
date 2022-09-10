import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { RelayProvider } from './providers/relay/RelayProvider'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { SnackbarProvider } from 'notistack'

import { RedirectUnauth } from './features/auth/RedirectUnauth'
import { RedirectAuth } from './features/auth/RedirectAuth'
import LoginPage from './pages/auth_login'
import SignupPage from './pages/auth_signup'
import HomePage from './pages/home'

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
          <Route path='/' element={<RedirectUnauth to='/auth' />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path='/auth' element={<RedirectAuth to='/' />}>
            <Route index element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}
