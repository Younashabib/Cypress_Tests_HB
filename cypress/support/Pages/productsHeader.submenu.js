/// <reference types = "Cypress" />

export class ProductsHeaderSubMenu {
  get theSauceTestToolchain() {
    return cy
      .get('span[class*="MuiTypography-root MuiTypography-buttonLabel css-"]')
      .contains("The Sauce Test Toolchain");
  }
}
