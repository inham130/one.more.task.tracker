const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.css'],
    compress: true,
    hot: true,
    open: false,
    port: 3000,
    historyApiFallback: true,
  }
});