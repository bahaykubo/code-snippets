import mocha from 'eslint-plugin-mocha';
import styleLintJs from 'style-lint-js/eslint.config.js';

export default [
  ...styleLintJs,
  mocha.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
    },
  },
];
