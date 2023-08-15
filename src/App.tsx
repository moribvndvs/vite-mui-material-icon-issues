import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import theme from './theme'
// leave this line uncommented to reproduce the first issue
import NavigateNextIcon from '@mui/icons-material/NavigateNext' 
// comment the line above and uncomment this line to reproduce the second
// import {NavigateNext as NavigateNextIcon} from '@mui/icons-material' 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box margin={2}>
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize='small' />}>
          <Link underline="hover" color="inherit">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Category 1
          </Link>
          <Typography color="text.primary">
            Page 1
          </Typography>
        </Breadcrumbs>
      </Box>
    </ThemeProvider>
  )
}