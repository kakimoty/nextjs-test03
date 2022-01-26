import { memo } from 'react'

import { Center } from '@chakra-ui/react'

import { Header } from './Header'

export const Layout: React.FunctionComponent = memo(({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <Center h="100%">{children}</Center>
      {/* Footer */}

      {/* React-Toastify */}
      {/* <div className="container mb-5 pb-5">
        <ToastContainer />
      </div> */}
    </>
  )
})

Layout.displayName = 'Layout'
