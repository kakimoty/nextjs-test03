import Box from '@mui/material/Box'
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
      </Head>

      <Layout>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button variant="contained" color="primary">
            Test
          </Button>
        </Box>
      </Layout>
    </div>
  )
}

export default Home
