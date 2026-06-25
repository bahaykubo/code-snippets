import cypress from 'eslint-plugin-cypress';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  {
    ignores: [
      'logs/',
      '**/*.log',
      'node_modules/',
      '.env',
      '.env.test',
      '.idea/',
      '.vscode/',
      'cypress/artifacts/',
      'dist/',
    ],
  },
  ...styleLintJs,
  cypress.configs.recommended,
];
