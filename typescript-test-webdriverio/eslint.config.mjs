import mocha from 'eslint-plugin-mocha';
import wdio from 'eslint-plugin-wdio';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  ...styleLintJs,
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
