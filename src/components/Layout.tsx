import { memo } from 'react'

import { Header } from './Header'

export const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      {children}
      {/* Footer */}

      {/* React-Toastify */}
      {/* <div className="container mb-5 pb-5">
        <ToastContainer />
      </div> */}
    </>
  )
})

Layout.displayName = 'Layout'
