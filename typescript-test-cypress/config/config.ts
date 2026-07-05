import { Credentials, Roles } from '@type/credentials';
import { Sites } from '@type/sites';

export const siteUrl: Sites = {
  jsonplaceholder: 'https://jsonplaceholder.typicode.com',
  sauceDemo: 'https://www.saucedemo.com',
};

const getPassword = (): string => {
  const password = Cypress.env('testpassword');
  if (!password) {
    throw new Error('No password was set for the test role. Add environment variable testpassword');
  }
  return password;
};

export const roles: Roles = {
  get sauceDemoRole(): Credentials {
    return {
      username: 'standard_user',
      password: getPassword(),
    };
  },
};
