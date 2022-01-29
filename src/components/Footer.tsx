import { memo, useEffect } from 'react'

import { SysConst } from '../lib/SysConst'

// Header
export const Footer: React.VFC = memo(() => {
  // useEffect
  useEffect(() => {}, [])

  // return
  return (
    <div>
      <div>Footer</div>
    </div>
  )
})

Footer.displayName = 'Footer'
