const mocha = require('eslint-plugin-mocha').default;

module.exports = [
  ...require('style-lint-js/eslint.config.js'),
  mocha.configs.recommended,
];
