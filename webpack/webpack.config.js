const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = (envVars) => {
  // envVars: { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, env: 'prod' }
  const { env } = envVars // 'prod'
  const envConfig = require(`./webpack.${env}`)
  const config = merge(commonConfig, envConfig)
  return config
}
