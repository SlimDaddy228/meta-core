import {useEffect} from 'react'
import NUI from '@drivers/index'
import '@styles/tailwind.scss'
import '@styles/globals.scss'
import {Menu} from '@library/slices/menu'
import {IS_DEVELOPMENT_MODE} from '@utils/envirnoments'

export const AppContainer = () => {
  useEffect(() => {
    NUI.initListeners()
    NUI.post({event: 'browser-test'}).then(console.log).catch(console.error)
    console.log('INIT')
  }, [])

  return (
    <div className={`app ${IS_DEVELOPMENT_MODE ? 'development' : ''}`}>
      <Menu />
    </div>
  )
}
