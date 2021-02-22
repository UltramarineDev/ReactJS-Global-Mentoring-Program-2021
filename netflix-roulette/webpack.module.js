const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader'
      ],
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: { name: 'img/[name].[ext]' }
        },
        'image-webpack-loader'
      ],
    }
  ],
});