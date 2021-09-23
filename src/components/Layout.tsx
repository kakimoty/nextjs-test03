import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import Link from 'next/link'
import { memo } from 'react'

export const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <>
      {/* Header */}
      <AppBar position="relative" elevation={0}>
        <Toolbar style={{ minHeight: '50px' }}>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            ICTSSS ver0.1
          </Typography>

          {/* 機能ボタン */}
          <nav>
            <Link href="/">ああああ</Link>
            <Link href="/">いいいい</Link>
            <Link href="/">うううう</Link>
          </nav>
        </Toolbar>
      </AppBar>

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
