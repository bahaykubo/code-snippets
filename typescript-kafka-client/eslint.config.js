const mocha = require('eslint-plugin-mocha').default;

module.exports = [
  ...require('style-lint-js/eslint.config-ts.js'),
  mocha.configs.recommended,
];
