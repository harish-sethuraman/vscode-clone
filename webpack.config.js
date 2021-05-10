const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.js|json$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        'src/public/_redirects',
        // { from: 'data/', to: 'data/' },
      ],
    }),
    new MiniCssExtractPlugin({
      chunkFilename: 'styles.css',
    }),
    new HtmlWebPackPlugin({
      title: 'Harish Kumar',
      template: 'src/public/index.html',
    }),
  ],
  devServer: {
    port: 1234,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Icons: path.resolve(__dirname, './src/icons'),
    },
    extensions: ['', '.js'],
  },
};
