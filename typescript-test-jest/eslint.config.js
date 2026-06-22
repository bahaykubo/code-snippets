const jest = require('eslint-plugin-jest');

module.exports = [
  ...require('style-lint-js/eslint.config-ts.js'),
  jest.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'jest/expect-expect': 'off',
      'jest/no-conditional-expect': 'off',
      'jest/no-disabled-tests': 'off',
      'jest/no-standalone-expect': 'off',
      'jest/require-top-level-describe': 2,
    },
  },
];
