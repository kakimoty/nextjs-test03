import { memo } from 'react'

export const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <>
      {/* Header */}

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
