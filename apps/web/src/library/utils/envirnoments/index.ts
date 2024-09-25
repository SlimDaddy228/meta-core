const getEnvironmentVariable = (key: keyof ImportMetaEnv) => {
  const environment = import.meta.env

  if (!(key in environment)) {
    throw new Error(`Environment variable ${key} not exist`)
  }

  return environment[key] || ''
}

export const MODE = getEnvironmentVariable('MODE')

export const HOST_IMAGE_URL = getEnvironmentVariable('VITE_APP_HOST_IMAGE_URL')
export const RESOURCE_NAME = getEnvironmentVariable('VITE_APP_RESOURCE_NAME')

export const IS_DEVELOPMENT_MODE = MODE === 'development'
export const IS_PRODUCTION_MODE = MODE === 'production'
