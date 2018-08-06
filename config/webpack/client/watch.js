import { HotModuleReplacementPlugin } from 'webpack'

import AssetsPlugin from 'assets-webpack-plugin'

import postcssImport from 'postcss-import'
import postcssCssnext from 'postcss-cssnext'
import postcssReporter from 'postcss-reporter'

import babelOptions from '../../babel/client'
import { NODE_ENV } from '../../environment'
import * as paths from '../../paths'

export default {
  name: 'Client (watch)',
  mode: 'development',
  entry: {
    index: [
      'webpack-dev-server/client?http://localhost:3001',
      './src/client'
    ]
  },
  output: {
    path: paths.buildClient,
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
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
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
      paths.srcClient,
      'node_modules'
    ]
  },
  optimization: {
    nodeEnv: NODE_ENV
  },
  devtool: 'cheap-module-source-map',
  context: paths.root,
  stats: 'errors-only',
  plugins: [
    new AssetsPlugin({
      path: paths.buildClient,
      filename: 'assets-manifest.json',
      prettyPrint: true
    }),
    new HotModuleReplacementPlugin()
  ],
  watch: true,
  node: false,
  devServer: {
    port: 3001,
    hot: true,
    stats: 'errors-only'
  }
}
