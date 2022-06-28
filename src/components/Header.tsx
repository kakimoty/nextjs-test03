import { memo, useEffect } from 'react'

import { SysConst } from '../lib/SysConst'

// Header
export const Header: React.FC = memo(() => {
  // useEffect
  useEffect(() => {}, [])

  // return
  return <div>Header1</div>
})

Header.displayName = 'Header'
