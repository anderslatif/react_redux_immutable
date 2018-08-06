import nodeExternals from 'webpack-node-externals'

import postcssImport from 'postcss-import'
import postcssCssnext from 'postcss-cssnext'
import postcssReporter from 'postcss-reporter'

import babelOptions from '../../babel/server'
import { NODE_ENV } from '../../environment'
import * as paths from '../../paths'

export default {
  name: 'Server',
  mode: 'none',
  entry: {
    index: './src/server'
  },
  output: {
    path: paths.buildServer,
    publicPath: '/assets/'
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
  optimization: {
    nodeEnv: NODE_ENV
  },
  devtool: 'source-map',
  context: paths.root,
  target: 'node',
  externals: [
    nodeExternals()
  ],
  node: false
}
