import Head from 'next/head'
import type { AppProps } from 'next/app'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { RecoilRoot } from 'recoil'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale('ja')

  return (
    <>
      <Head>
        <title></title>
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
