const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: {
    app: './src/index.js',
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
  },
  output: {
    globalObject: 'self',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp|ttf)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        use: ['style-loader', 'css-loader', 'postcss-loader'],

      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'VSCODE',
      filename: 'remoteEntry.js',
      exposes: {
        './VSCODE': './src/app.js',
      },
      shared: [{
        react: {
          requiredVersion: '^17.0.2',
          singleton: true,
        },
      }],
    }),
    new CopyWebpackPlugin({
      patterns: [
        'src/public/_redirects',
        'src/public/robots.txt',
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
    port: 1235,
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
