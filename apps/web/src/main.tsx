import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AppContainer} from '@/app.container'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>,
)
