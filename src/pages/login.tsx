import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { Layout } from '../components/Layout'
import { SysConst } from '../lib/SysConst'

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  // return
  return (
    <Layout>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {SysConst.AppName} ログイン
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                id="email"
                label="メールアドレス"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                name="password"
                label="パスワード"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            ログイン
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
