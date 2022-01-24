import Head from 'next/head'
import type { AppProps } from 'next/app'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { RecoilRoot } from 'recoil'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale('ja')

  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
