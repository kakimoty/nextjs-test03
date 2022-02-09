import { memo, useEffect } from 'react'

import { SysConst } from '../lib/SysConst'

// Header
export const Header: React.VFC = memo(() => {
  // useEffect
  useEffect(() => {}, [])

  // return
  return (
    <nav className="flex flex-wrap justify-between items-center p-3 bg-teal-500">
      <div className="flex shrink-0 items-center mr-6 text-white">
        <svg
          className="mr-2 w-8 h-8 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">{SysConst.AppName}</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center py-2 px-3 text-teal-200 hover:text-white rounded border border-teal-400 hover:border-white">
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block grow w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:grow">
          <a
            href="#responsive-header"
            className="block mt-4 mr-4 text-teal-200 hover:text-white lg:inline-block lg:mt-0"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 mr-4 text-teal-200 hover:text-white lg:inline-block lg:mt-0"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 text-teal-200 hover:text-white lg:inline-block lg:mt-0"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block py-2 px-4 mt-4 text-sm leading-none text-white hover:text-teal-500 hover:bg-white rounded border border-white hover:border-transparent lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
})

Header.displayName = 'Header'
