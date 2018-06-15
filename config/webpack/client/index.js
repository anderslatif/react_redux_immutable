import developmentConfig from './development'
import productionConfig from './production'

import { NODE_ENV } from '../../environment'

export default NODE_ENV === 'production'
  ? productionConfig
  : developmentConfig
