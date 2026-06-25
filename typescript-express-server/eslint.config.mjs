import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  { ignores: ['node_modules', 'data', 'dist', 'artifacts'] },
  ...styleLintJs,
];
