const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const { resolve } = require('path');

const base = require('./webpack.config.base');

module.exports = merge(base, {
  name: 'server',
  target: 'node',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
});
