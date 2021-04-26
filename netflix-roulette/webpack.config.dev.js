const { merge } = require('webpack-merge');
const { resolve, join } = require('path');
const webpack = require('webpack');

const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
