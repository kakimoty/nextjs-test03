import Head from 'next/head'
import type { NextPage } from 'next'

import { chakra, Box } from '@chakra-ui/react'

import { Layout } from 'src/components/Layout'
import { SysConst } from '../lib/SysConst'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SysConst.AppName}</title>
      </Head>

      <Layout>
        <Box bg="gray.200" h="60px" w="100%">
          <chakra.h1 color="tomato">Hello World!</chakra.h1>
        </Box>
      </Layout>
    </div>
  )
}

export default Home
