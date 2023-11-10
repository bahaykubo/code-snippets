// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('style-lint-js/.eslintrc-ts');

rules.env = {
  ...rules.env,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/globals': true,
};
rules.plugins = ['eslint-plugin-jest'];
rules.parserOptions.ecmaVersion = 'latest';
rules.extends.push('plugin:jest/recommended');
rules.rules = {
  ...rules.rules,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/consistent-test-it': [
    'error',
    {
      fn: 'it',
      withinDescribe: 'it',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/expect-expect': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/no-conditional-expect': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/no-disabled-tests': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/no-standalone-expect': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'jest/require-top-level-describe': 2,
};

module.exports = rules;
