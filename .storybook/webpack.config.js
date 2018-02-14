const path = require('path')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const config = require('../webpack/config');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    },
    modules: [
      'node_modules',
      projectRoot,
    ],
  },
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
      {
        test: /\.svg?$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
    ]
  },
  plugins: [
    new SvgSpriteHtmlWebpackPlugin(),
  ],
};
