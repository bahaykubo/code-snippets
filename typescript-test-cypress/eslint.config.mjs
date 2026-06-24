import cypress from 'eslint-plugin-cypress';
import styleLintJs from 'style-lint-js/eslint.config-ts.js';

export default [...styleLintJs, cypress.configs.recommended];
