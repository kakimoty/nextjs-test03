import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import createEmotionCache from '../styles/createEmotionCache'
import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const theme = createTheme()

  dayjs.locale('ja')

  return (
    <>
      <RecoilRoot>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
