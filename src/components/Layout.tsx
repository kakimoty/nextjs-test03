import { memo } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = memo(({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      {children}

      {/* Footer */}
      <Footer />

      {/* React-Toastify */}
      {/* <div className="container mb-5 pb-5">
        <ToastContainer />
      </div> */}
    </>
  )
})

Layout.displayName = 'Layout'
