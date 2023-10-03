const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      fs: require.resolve('graceful-fs'),
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
    },
  },
  

};
