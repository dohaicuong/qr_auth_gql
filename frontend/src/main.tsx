import { createRoot } from 'react-dom/client'

import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'

const query = graphql`
  query AppQuery {
    me {
      id
      username
    }
  }
`

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { RelayProvider } from './providers/relay/RelayProvider'
// import { ThemeProvider } from './providers/theme/ThemeProvider'
// import { SnackbarProvider } from 'notistack'

// import App from './App'
// import { Suspense } from 'react'

const root = document.getElementById('root')
if (!root) throw new Error('Found no html with id root')

createRoot(root).render(
  <>
    ec
  </>
  // <BrowserRouter>
  //   <RelayProvider>
  //     <ThemeProvider>
  //       <SnackbarProvider maxSnack={3}>
  //         <Routes>
  //           <Route
  //             path='/'
  //             element={
  //               <Suspense>
  //                 <App />
  //               </Suspense>
  //             }
  //           />
  //         </Routes>
  //       </SnackbarProvider>
  //     </ThemeProvider>
  //   </RelayProvider>
  // </BrowserRouter>
)
