import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'src/components/Layout'
import { SysConst } from '../lib/SysConst'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SysConst.AppName}</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <div>{SysConst.AppName + ' ' + SysConst.AppVersion}</div>
      </Layout>
    </div>
  )
}

export default Home
