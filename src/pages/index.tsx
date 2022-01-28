import Head from 'next/head'
import type { NextPage } from 'next'

import { Layout } from 'src/components/Layout'
import { SysConst } from '../lib/SysConst'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SysConst.AppName}</title>
      </Head>

      <Layout>Hello World!</Layout>
    </div>
  )
}

export default Home
