import mocha from 'eslint-plugin-mocha';
import wdio from 'eslint-plugin-wdio';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  {
    ignores: ['logs/', '**/*.log', 'node_modules/', '.env', '.env.test', '.idea/', '.vscode/', 'artifacts/', 'dist/'],
  },
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
