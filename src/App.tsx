import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []) // make sure to pass empty array as second argument, otherwise it will create new theme on every render

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        Hi
      </ThemeProvider>
    </div>
  )
}

export default App
