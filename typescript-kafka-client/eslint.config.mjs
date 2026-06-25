import mocha from 'eslint-plugin-mocha';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [
  {
    ignores: [
      'dist/',
      'tmp/',
      'out-tsc/',
      'node_modules/',
      '.idea/',
      '.project',
      '.classpath',
      '.c9/',
      '*.launch',
      '.settings/',
      '*.sublime-workspace',
      '.vscode/',
      '.sass-cache/',
      'connect.lock',
      'coverage/',
      'junit/',
      'libpeerconnection.log',
      'npm-debug.log',
      'debug.log',
      'yarn-error.log',
      'testem.log',
      'typings/',
      'artifacts/',
      'data/',
    ],
  },
  ...styleLintJs,
  mocha.configs.recommended,
];
