import { siteUrl } from '@config/config';
import { Credentials } from '@type/credentials';

export class HomePage {
  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';

  open(): void {
    cy.visit(siteUrl.sauceDemo);
  }

  login(account: Credentials): void {
    cy.get(this.usernameInput).type(account.username);
    cy.get(this.passwordInput).type(account.password);
    cy.get(this.loginButton).click();
  }
}
