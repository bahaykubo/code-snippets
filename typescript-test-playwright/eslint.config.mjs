import playwright from 'eslint-plugin-playwright';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  {
    ignores: ['logs/', '**/*.log', 'node_modules/', '.env', '.env.test', '.idea/', '.vscode/', 'artifacts/', 'dist/'],
  },
  ...styleLintJs,
  playwright.configs['flat/recommended'],
  {
    rules: {
      'playwright/missing-playwright-await': 'warn',
      'playwright/no-page-pause': 'warn',
      'playwright/no-element-handle': 'off',
      'playwright/no-eval': 'off',
      'playwright/no-focused-test': 'warn',
      'playwright/no-skipped-test': 'off',
      'playwright/no-wait-for-timeout': 'off',
      'playwright/no-force-option': 'off',
      'playwright/max-nested-describe': 'off',
      'playwright/no-conditional-in-test': 'off',
      'playwright/no-useless-not': 'off',
      'playwright/no-restricted-matchers': 'off',
      'playwright/prefer-lowercase-title': 'off',
      'playwright/prefer-to-have-length': 'off',
      'playwright/require-top-level-describe': 'error',
      'playwright/valid-expect': 'off',
      'playwright/expect-expect': 'off',
      'playwright/no-networkidle': 'off',
    },
  },
];
