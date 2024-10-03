import {useCallback, useRef} from 'react'

const DEFAULT_THROTTLED_TIMEOUT = 500

export const useDebounce = <CallbackParameters>(
  callback: (parameters: CallbackParameters) => void,
  timeout = DEFAULT_THROTTLED_TIMEOUT,
) => {
  const timerId = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (parameters: CallbackParameters) => {
      if (timerId.current) {
        clearTimeout(timerId.current)
      }

      timerId.current = setTimeout(() => callback(parameters), timeout)
    },
    [callback, timeout],
  )
}
