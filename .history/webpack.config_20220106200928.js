const path = require('path');

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
      filename: 'bundled.js',
      path: path.resolve(__dirname, 'app')
  },
  devServer: {
      static: {
        directory: path.join(__dirname, 'app')
      },
      hot: true,
      port: 3003,
      host: '0.0.0.0'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
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
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
             // sourceMap: true
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
             // sourceMap: true
            }
          }
        ],
      },
    ],
  },
}
