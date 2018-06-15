import { NODE_ENV } from 'settings'

export * from 'settings'

export const PORT = process.env.PORT || 3000
export const LOG_FORMAT = NODE_ENV == 'production' ? 'combined' : 'dev'
