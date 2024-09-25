import {useEffect} from 'react'
import NUI from '@drivers/index'
import '@assets/styles/global.css'
import {Menu} from '@library/slices/menu'

export const AppContainer = () => {
  useEffect(() => {
    NUI.initListeners()
  }, [])

  return (
    <div>
      <Menu />
    </div>
  )
}
