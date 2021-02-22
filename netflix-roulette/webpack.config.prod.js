const { resolve } = require('path');

const getModule = require('./webpack.module');
const getPlugins = require('./webpack.plugins');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:6].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:6].js',
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    modules: [resolve(__dirname, './src'), 'node_modules'],
  },
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    open: true,
    hot: true,
  },
  plugins: getPlugins(false),
  module: getModule(),
};