import { memo } from 'react'
import { ToastContainer } from 'react-toastify'

export const Layout = memo(({ children }) => {
  return (
    <div>
      {/* Body */}
      {children}

      {/* React-Toastify */}
      <div className="container mb-5 pb-5">
        <ToastContainer />
      </div>
    </div>
  )
})

Layout.displayName = 'Layout'
