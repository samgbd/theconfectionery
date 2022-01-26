const path = require('path');

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
        test: /\.(png|jpg|gif|svg|ico)$/i,
        type: 'asset/resource'
        // loader: 'url-loader',
        // options:{
        //     outputPath: './app/assets/images/',
        //     name: '[name].[ext]?[hash]'
        // }
    },
      {
         test: /\.css$/,
         use: [
          'style-loader',
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
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,'style-loader',
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
}
