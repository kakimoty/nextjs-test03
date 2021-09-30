import 'dayjs/locale/ja'
import '../styles/globals.css'

import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import dayjs from 'dayjs'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import createEmotionCache from '../styles/createEmotionCache'
import theme from '../styles/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  dayjs.locale('ja')

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title></title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
