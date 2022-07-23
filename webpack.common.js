const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    // alias: {
    //   '@components': path.resolve(__dirname, 'src', 'components'),
    //   '@utils': path.resolve(__dirname, 'src/utils')
    // }
    plugins: [new TsconfigPathsPlugin({
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json')
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[path][name]__[local]'
              }
            }
          },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })]
};