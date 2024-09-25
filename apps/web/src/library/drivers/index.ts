import axios from 'axios'
import {IS_DEVELOPMENT_MODE, RESOURCE_NAME} from '@utils/envirnoments'
import type {
  EVENT,
  FUNC,
  INuiEvents,
  INuiKeysDown,
  INuiKeysUp,
  INuiPost,
  KEY,
} from './types'

const debug = false

const removeListener = (array: unknown[], function_: FUNC) => {
  if (array) {
    const index = array.indexOf(function_)
    if (index !== -1) {
      array.splice(index, 1)
    }
  }
}

export default class NUI {
  private static events: INuiEvents = {}

  private static keysDown: INuiKeysDown = {}

  private static keysUp: INuiKeysUp = {}

  static addKeyDownListener = (key: KEY, function_: FUNC): void => {
    const normalizeKey = key.toLowerCase()
    NUI.keysDown[normalizeKey] = NUI.keysDown[normalizeKey] || []
    NUI.keysDown[normalizeKey].push(function_)
  }

  static removeKeyDownListener = (key: KEY, function_: FUNC): void => {
    removeListener(NUI.keysDown[key], function_)
  }

  static addKeyUpListener = (key: KEY, function_: FUNC): void => {
    const normalizeKey = key.toLowerCase()
    NUI.keysUp[normalizeKey] = NUI.keysUp[normalizeKey] || []
    NUI.keysUp[normalizeKey].push(function_)
  }

  static removeKeyUpListener = (key: KEY, function_: FUNC): void => {
    removeListener(NUI.keysUp[key], function_)
  }

  static addMessageListener<T = any>(event: EVENT, function_: FUNC<T>): void {
    NUI.events[event] = NUI.events[event] || []
    NUI.events[event].push(function_)
  }

  static removeMessageListener = (event: EVENT, function_: FUNC): void => {
    removeListener(NUI.events[event], function_)
  }

  static voidPost = ({
    event,
    rsc = RESOURCE_NAME,
    data = {},
  }: INuiPost): void => {
    if (event && !IS_DEVELOPMENT_MODE) {
      axios.post(`https://${rsc}/${event}`, data).then().catch()
    }
  }

  static post = <T = any>({
    event,
    rsc = RESOURCE_NAME,
    data = {},
  }: INuiPost): Promise<T> =>
    new Promise((resolve, reject) => {
      if (event && !IS_DEVELOPMENT_MODE) {
        axios
          .post(`https://${rsc}/${event}`, data)
          .then(({data}) => resolve(data))
          .catch((error) => reject(error))
      }
    })

  static initListeners = (): void => {
    NUI.initNuiMessage()
    NUI.initKeyDown()
  }

  private static emitEvent(event: EVENT, payload: unknown): void {
    window.dispatchEvent(
      new MessageEvent('message', {
        data: {event, payload},
      }),
    )
  }

  private static initNuiMessage = (): void => {
    window.addEventListener('message', ({data}) => {
      const {event: eventName, payload} = data
      NUI.events[eventName]?.forEach((callback) => callback(payload))
      if (debug) {
        console.debug(JSON.stringify(data, null, 2))
      }
    })
  }

  private static initKeyDown = (): void => {
    window.addEventListener('keydown', ({code}) => {
      const key = code.toLowerCase()
      NUI.keysDown[key]?.forEach((function_) => function_())
    })
  }
}
