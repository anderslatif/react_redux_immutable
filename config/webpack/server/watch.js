import { HotModuleReplacementPlugin } from 'webpack'
import StartServerPlugin from 'start-server-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

import postcssImport from 'postcss-import'
import postcssCssnext from 'postcss-cssnext'
import postcssReporter from 'postcss-reporter'

import babelOptions from '../../babel/server'
import { NODE_ENV } from '../../environment'
import * as paths from '../../paths'

export default {
  name: 'Server (watch)',
  mode: 'development',
  entry: {
    index: [
      'webpack/hot/signal',
      './src/server'
    ]
  },
  output: {
    path: paths.buildServer,
    publicPath: 'http://localhost:3001/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          paths.src
        ],
        loader: 'babel-loader',
        options: babelOptions
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: loader => [
                postcssImport({
                  root: paths.root,
                  path: [
                    paths.src
                  ]
                }),
                postcssCssnext({ browsers: 'defaults' }),
                postcssReporter()
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      paths.src,
      paths.srcServer,
      'node_modules'
    ]
  },
  devtool: 'cheap-module-source-map',
  context: paths.root,
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: 'webpack/hot/signal'
    })
  ],
  stats: 'errors-only',
  plugins: [
    new HotModuleReplacementPlugin(),
    new StartServerPlugin({
      name: 'index.js',
      nodeArgs: ['-r', 'source-map-support/register'],
      keyboard: true,
      signal: true
    })
  ],
  watch: true,
  node: false
}
