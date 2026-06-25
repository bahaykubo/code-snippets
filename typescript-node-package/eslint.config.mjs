import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  {
    ignores: ['logs/', '**/*.log', 'node_modules/', '.env', '.env.test', '.idea/', '.vscode/', 'artifacts/', 'dist/'],
  },
  ...styleLintJs,
];
