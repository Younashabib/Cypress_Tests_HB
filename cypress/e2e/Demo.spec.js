/// <reference types = "Cypress" />
import { HomePage } from "../support/Pages/homepage.page";
let homePage = new HomePage();
let headerMenu = homePage.getHeaderMenu();

describe("sauce lab Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify homepage buttons", () => {
    homePage.tryItForFreeButton.should("exist");
    homePage.requestADemoButton.should("exist");
  });

  it("Verify Header menu", () => {
    headerMenu.productsHeaderMenu.should("exist");
    headerMenu.solutionsHeaderMenu.should("exist");
    headerMenu.pricingHeaderMenu.should("exist");
    headerMenu.developersHeaderMenu.should("exist");
    headerMenu.resourcesHeaderMnu.should("exist");
  });

  it.only("Verify buttons in Sauce test toolchain", () => {
    let productsHeaderSubMenu = headerMenu.getProductsHeaderSubMenu();
    productsHeaderSubMenu.theSauceTestToolchain.click();
  });
});
