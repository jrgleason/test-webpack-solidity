const path = require('path');
const commonConfig = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../out'),
      publicPath: './webpack/'
  },
  module: {
    rules: [
       { test: /\.sol$/, loader: 'truffle-solidity-loader' }
    ]
  }
};
module.exports = commonConfig;