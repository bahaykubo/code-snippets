// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('style-lint-js/.eslintrc-ts');

rules.extends.push('plugin:mocha/recommended');

module.exports = rules;
