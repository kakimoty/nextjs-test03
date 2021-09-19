import { memo } from 'react'
import { ToastContainer } from 'react-toastify'

export const Layout = memo(({ children }) => {
  return (
    <div>
      {/* 本文 */}
      {children}

      {/* トースト */}
      <div className="container mb-5 pb-5">
        <ToastContainer />
      </div>
    </div>
  )
})

Layout.displayName = 'Layout'
