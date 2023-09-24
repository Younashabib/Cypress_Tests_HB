import { ProductsHeaderSubMenu } from "../productsHeader.submenu";
export class HeaderMenu {
  get productsHeaderMenu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Products");
  }

  getProductsHeaderSubMenu() {
    this.productsHeaderMenu.trigger("mouseover");
    return new ProductsHeaderSubMenu();
  }

  get solutionsHeaderMenu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Solutions");
  }

  get pricingHeaderMenu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Pricing");
  }

  get developersHeaderMenu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Developers");
  }

  get resourcesHeaderMnu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Resources");
  }
}
