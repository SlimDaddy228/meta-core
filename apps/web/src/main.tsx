import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AppContainer} from '@/app.container'
import {ThemeProvider} from '@emotion/react'
import {ApplicationCustomTheme} from '@assets/theme'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <ThemeProvider theme={ApplicationCustomTheme}>
      <AppContainer />
    </ThemeProvider>
  </StrictMode>,
)
