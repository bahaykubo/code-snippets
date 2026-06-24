import mocha from 'eslint-plugin-mocha';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [...styleLintJs, mocha.configs.recommended];
