const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    modules: [resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css', 'scss'],
  },
  watchOptions: {
    aggregateTimeout: 100,
    ignored: /node_modules/,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/public/favicon.ico',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/_variables.scss',
                './src/_mixins.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
};
