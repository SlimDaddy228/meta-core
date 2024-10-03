import {Component} from 'react'
import {NUI} from '@drivers/nui'
import '@styles/tailwind.scss'
import '@styles/globals.scss'
import '@styles/fonts.scss'
import {Menu} from '@library/slices/menu'
import {IS_DEVELOPMENT_MODE} from '@utils/envirnoments'
import {Containers} from '@library/slices/containers'

export class AppContainer extends Component {
  componentDidMount() {
    NUI.initListeners()
  }

  render() {
    return (
      <div className={`app ${IS_DEVELOPMENT_MODE ? 'development' : ''}`}>
        <Menu />
        <Containers />
      </div>
    )
  }
}
