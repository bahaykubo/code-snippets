// eslint-disable-next-line @typescript-eslint/no-var-requires
const rules = require('style-lint-js/.eslintrc-ts');

rules.extends.push('plugin:playwright/playwright-test');
rules.rules = {
  ...rules.rules,
  ...{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/missing-playwright-await': 'warn',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-page-pause': 'warn',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-element-handle': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-eval': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-focused-test': 'warn',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-skipped-test': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-wait-for-timeout': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-force-option': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/max-nested-describe': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-conditional-in-test': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-useless-not': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-restricted-matchers': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/prefer-lowercase-title': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/prefer-to-have-length': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/require-top-level-describe': 'error',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/valid-expect': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/expect-expect': 'off',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'playwright/no-networkidle': 'off',
  },
};

module.exports = rules;
