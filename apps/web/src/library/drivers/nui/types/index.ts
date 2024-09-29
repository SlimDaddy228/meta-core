export type KEY = string
export type FUNC<T = any> = (...arguments_: T[]) => void
export type EVENT = string

export interface INuiEvents {
  [key: string]: FUNC[]
}

export interface INuiKeysDown {
  [key: string]: FUNC[]
}

export interface INuiKeysUp {
  [key: string]: FUNC[]
}

export interface INuiPost {
  event: string
  rsc?: string
  data?: object
}
