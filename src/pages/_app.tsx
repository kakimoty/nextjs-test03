import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale('ja')

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
export default MyApp
