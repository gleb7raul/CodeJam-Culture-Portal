const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, './build');

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
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './',
    hot: true,
    host: '127.0.0.1',
    port: 3000
  }
};
