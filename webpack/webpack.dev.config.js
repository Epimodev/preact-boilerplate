const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');

module.exports = merge(webpackBaseConfig, {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: config.cssOptions },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: config.sassOptions },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.entryHTML,
      template: config.outputHTML,
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
