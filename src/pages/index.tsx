import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from 'src/components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>Next.js Template</div>
      </Layout>
    </div>
  )
}

export default Home
