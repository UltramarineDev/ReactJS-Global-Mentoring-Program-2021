const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (production) => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
    minify: production ? {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    } : false,
  });

  const cssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'styles/[name].css',
    chunkFilename: 'styles/[name].css',
  });

  return [
    htmlWebpackPlugin,
    cssExtractPlugin,
    new webpack.HotModuleReplacementPlugin()
  ];
};