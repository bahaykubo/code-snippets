const mocha = require('eslint-plugin-mocha').default;
const wdio = require('eslint-plugin-wdio');

module.exports = [
  ...require('style-lint-js/eslint.config-ts.js'),
  mocha.configs.recommended,
  wdio.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'mocha/no-hooks-for-single-case': 'off',
      'mocha/no-pending-tests': 'off',
      'mocha/no-skipped-tests': 'off',
      'mocha/no-top-level-hooks': 'off',
      'mocha/no-setup-in-describe': 'off',
    },
  },
];
