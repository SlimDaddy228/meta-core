import {useEffect} from 'react'
import {NUI} from '@drivers/nui'
import '@styles/tailwind.scss'
import '@styles/globals.scss'
import '@styles/fonts.scss'
import {Menu} from '@library/slices/menu'
import {IS_DEVELOPMENT_MODE} from '@utils/envirnoments'
import {Inventory} from '@library/slices/inventory'

export const AppContainer = () => {
  useEffect(() => {
    NUI.initListeners()
  }, [])

  return (
    <div className={`app ${IS_DEVELOPMENT_MODE ? 'development' : ''}`}>
      <Menu />
      <Inventory />
    </div>
  )
}
