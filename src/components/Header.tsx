import { memo, useEffect } from 'react'

import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdCalendarViewMonth, MdMoreTime } from 'react-icons/md'

import { SysConst } from '../lib/SysConst'

// Header
export const Header = memo(() => {
  // useEffect
  useEffect(() => {}, [])

  // return
  return (
    <div>
      <div>Header</div>
    </div>
  )
})

Header.displayName = 'Header'
