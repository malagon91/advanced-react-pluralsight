const path = require('path');
module.exports = {// add babel polyfill to run most new code on js
  entry: ['babel-polyfill','./lib/components/index.js'],
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader' }
    ]
  }
};// yarn add @babel/env @babel/react @babel/preset-react