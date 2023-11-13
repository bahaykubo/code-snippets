// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('style-lint-js/.eslintrc-ts');

rules.env = {
  ...rules.env,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'cypress/globals': true,
};
rules.plugins = ['cypress'];
rules.extends.push('plugin:cypress/recommended');

module.exports = rules;
