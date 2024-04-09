const rules = require('style-lint-js/.eslintrc');

rules.extends.push('plugin:mocha/recommended');
rules.parser = '@babel/eslint-parser';

module.exports = rules;
