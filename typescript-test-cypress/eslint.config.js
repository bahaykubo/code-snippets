const cypress = require('eslint-plugin-cypress');

module.exports = [
  ...require('style-lint-js/eslint.config-ts.js'),
  cypress.configs.recommended,
];
