const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader'
        ],
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: []
      },
      {
        test: /\.(png|jpe?g)$/,
        exclude: /node_modules/,
        use: [
          'preload-image-loader',
          'file-loader?[path][name].[ext]'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
  ],
  devServer: {
    contentBase: './build',
    hot: true,
    host: '127.0.0.1',
    port: 3000
  }
};
