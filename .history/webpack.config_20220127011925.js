const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";

console.log(process.env.NODE_ENV)
module.exports = {
 
  entry: './app/assets/scripts/App.js',

  
  resolve: {
    alias: {
      Images: path.resolve(__dirname, 'app/assets/images'),
      Fonts: path.resolve(__dirname, 'app/assets/fonts')
    }
  },
  output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app')

  },
  devServer: {
      static: './app',
      // {
      //   directory: path.join(__dirname, 'app')
      // },
      hot: true,
      port: 3003,
      host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        // test: /\.(png|jpg|gif|svg|ico)$/i,
        // type: 'asset/resource'
        // loader: 'url-loader',
        // options:{
        //     outputPath: './app/assets/images/',
        //     name: '[name].[ext]?[hash]'
        // }
    },
      {
         test: /\.css$/,
         use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
         use: [
          // Creates `style` nodes from JS strings
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
             sourceMap: true
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sourceMap: true
            }
          }
        ],
      },
    ],
  },
  plugins: [devMode ? false: new MiniCssExtractPlugin(),
            devMode ? false : new HtmlWebpackPlugin({filename:'app/index.htmltemplate:'app/index.html'})].filter(Boolean)
}
