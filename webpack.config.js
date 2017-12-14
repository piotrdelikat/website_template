var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [
              {
                  test:/\.js$/,
                  exclude: /(node_modules)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                      }
                  }
              },
              {
                  test:/\.(s*)css$/,
                  use: ExtractTextPlugin.extract({
                          fallback:'style-loader',
                          use:['css-loader','sass-loader'],
                  })
              },
              {
                  test: /\.(eot|svg|ttf|woff|woff2)$/,
                  loader: "file-loader",
                  options: {
                    name: "fonts/[name].[ext]",
                  },
              },
            ]
          },
      plugins: [
         new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery',
           Popper: ['popper.js', 'default'],
           }),
         new ExtractTextPlugin("bundled_styles.css"),
  ]
}
