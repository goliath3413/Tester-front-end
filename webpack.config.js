const path = require('path');

module.exports = {
  entry: './docs/src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'main.js',
  },
  mode: 'production'
};