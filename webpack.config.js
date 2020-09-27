const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const clientEntry = {
  production:  './src/index.js',
  development: './src/index.development.js',
}

module.exports = (env, argv) => {

  return [

    {
      devServer: {
        contentBase: './public',
        port: 5000
      },

      entry: clientEntry[argv.mode],
      output: {
        filename: 'index.js'
      },

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: {
              loader: 'file-loader?name=[name].[ext]'
            }
          }
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          inlineSource: 'index.js',
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
      ]
    },
  ];
}
