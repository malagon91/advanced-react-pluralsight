const path = require('path');
const webpack = require('webpack');
module.exports = {// add babel polyfill to run most new code on js
  resolve: {
    modules:[
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },// I am goint to separate the vendor files to my own app  (making 2 entry points)
  //entry: ['babel-polyfill','./lib/renderers/dom.js'],
  entry: {
    vendor: [ // add all libraries used in the app 
      'babel-polyfill',
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby',
    ],
    app: ['./lib/renderers/dom.js']
  },
  output: {
    path: path.resolve(__dirname,'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:['react','env','stage-2']
          }
        } }
    ]
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    })
  ]
};// yarn add @babel/env @babel/react @babel/preset-react