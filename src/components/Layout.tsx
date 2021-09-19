import Head from 'next/head'
import { memo } from 'react'
import { ToastContainer } from 'react-toastify'

export const Layout = memo(({ children }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      {/* Header */}

      {/* Body */}
      {children}

      {/* Footer */}

      {/* React-Toastify */}
      <div className="container mb-5 pb-5">
        <ToastContainer />
      </div>
    </div>
  )
})

Layout.displayName = 'Layout'
