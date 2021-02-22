const { resolve, join } = require('path');

const getModule = require('./webpack.module');
const getPlugins = require('./webpack.plugins');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
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
  devtool: 'source-map',
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
