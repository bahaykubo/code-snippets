import { Roles } from '@type/credentials';
import { Sites } from '@type/sites';
import { TestConfig } from '@type/config';
import { config } from 'dotenv';

export const loadEnvironmentVariablesFromFile = (): void => {
  config({ path: './.env' });
};

export const siteUrl: Sites = {
  jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  sauceDemo: 'https://www.saucedemo.com/',
};

export const testConfig: TestConfig = {
  headless: process.env.HEADED === 'true' ? false : true,
  viewport: {
    width: 1280,
    height: 1024,
  },
  slowMo: process.env.SLOWMO ? parseInt(process.env.SLOWMO) * 1000 : 0,
  testRunners: process.env.TEST_RUNNERS ? parseInt(process.env.TEST_RUNNERS) : undefined,
  testTimeout: 90000,
  actionTimeout: 10000,
};

const getPassword = (): string => {
  loadEnvironmentVariablesFromFile();
  if (!process.env.testpassword) {
    throw new Error('No password was set for the test role. Add environment variable testpassword');
  }
  return process.env.testpassword;
};

export const roles: Roles = {
  sauceDemoRole: {
    username: 'standard_user',
    password: getPassword(),
  },
};
