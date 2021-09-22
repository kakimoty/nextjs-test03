import Button from '@mui/material/Button'
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
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Layout>
        <Button variant="contained">Hello World</Button>
      </Layout>
    </div>
  )
}

export default Home
