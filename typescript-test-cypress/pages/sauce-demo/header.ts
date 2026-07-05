export class Header {
  private readonly shoppingCartButton = '.shopping_cart_link';
  private readonly menuButton = '#react-burger-menu-btn';
  private readonly logoutButton = '#logout_sidebar_link';

  openShoppingCart(): void {
    cy.get(this.shoppingCartButton).click();
  }

  logout(): void {
    this.openMenu();
    cy.get(this.logoutButton).click();
  }

  openMenu(): void {
    cy.get(this.menuButton).click();
  }
}
