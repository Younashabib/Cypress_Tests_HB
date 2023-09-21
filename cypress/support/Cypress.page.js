export class CypressPage {
  get loginButton() {
    return cy.get('[data-cy="header-install"]');
  }
}
