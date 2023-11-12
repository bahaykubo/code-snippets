// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('style-lint-js/.eslintrc-ts');

rules.env = {
  ...rules.env,
  mocha: true,
};
rules.plugins.push('mocha');
rules.parserOptions.ecmaVersion = 'latest';
rules.extends.push('plugin:mocha/recommended');
rules.rules = {
  ...rules.rules,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'mocha/no-hooks-for-single-case': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'mocha/no-pending-tests': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'mocha/no-skipped-tests': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'mocha/no-top-level-hooks': 'off',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'mocha/no-setup-in-describe': 'off',
};

module.exports = rules;
