const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {


  devServer: {
    colors:true,
    historyApiFallback:true,
    inline:true,
    hot:true
  }
}