const { resolve } = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:6].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:6].js',
  }
});
