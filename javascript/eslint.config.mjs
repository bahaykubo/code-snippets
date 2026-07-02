import mocha from 'eslint-plugin-mocha';
import styleLintJs from 'style-lint-js/eslint.config.js';

export default [{ ignores: ['node_modules/', 'artifacts/'] }, ...styleLintJs, mocha.configs.recommended];
