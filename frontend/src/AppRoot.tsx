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

import { animated, useTransition } from 'react-spring'

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
    // from: { transform: 'translate3d(100%,0,0)' },
    // enter: { transform: 'translate3d(0%,0,0)' },
    // leave: { transform: 'translate3d(-50%,0,0)' },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions((props, item) => (
    <ErrorBoundary fallback={<>Something went wrong!</>}>
      <Suspense fallback='Loading...'>
        <animated.div style={props}>
          <Routes location={item}>
            <Route path='/' element={<RedirectUnauth to='/auth' />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path='/auth' element={<RedirectAuth to='/' />}>
              <Route index element={<LoginPage />} />
              <Route path='signup' element={<SignupPage />} />
            </Route>
          </Routes>
        </animated.div>
      </Suspense>
    </ErrorBoundary>
  ))
}
