import Container from '@mui/material/Container'
import { memo } from 'react'

export const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <>
      {/* Header */}

      {/* Body */}
      <Container component="main" maxWidth="xs">
        {children}
      </Container>

      {/* Footer */}

      {/* React-Toastify */}
      {/* <div className="container mb-5 pb-5">
        <ToastContainer />
      </div> */}
    </>
  )
})

Layout.displayName = 'Layout'
