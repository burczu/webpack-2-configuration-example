const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: {
    home: './src/home.js',
    post: './src/post.js',
    contanct: './src/contact.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  }
};
