const path = require('path');

module.exports = {
  dependencies: {
    '@rn-core/components': {
      root: path.join(__dirname, './@rn-core/components'),
    },
    '@rn-core/navigations': {
      root: path.join(__dirname, './@rn-core/navigations'),
    },
    '@rn-core/core': {
      root: path.join(__dirname, './@rn-core/core'),
    },
  },
};
