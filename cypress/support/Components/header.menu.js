export class HeaderMenu {
  get productsHeaderMenu() {
    return cy
      .get(
        'span[class*="MuiTypography-root MuiTypography-buttonLabelNav css-"]'
      )
      .contains("Products");
  }

  get solutionsHeaderMenu() {
    return cy
      .get('span*[class="MuiTypography-root MuiTypography-buttonLabelNav css-]')
      .contains("Solutions");
  }

  get pricingHeaderMenu() {
    return cy
      .get('span*[class="MuiTypography-root MuiTypography-buttonLabelNav css-]')
      .contains("Pricing");
  }

  get resourcesHeaderMnu() {
    return cy
      .get('span*[class="MuiTypography-root MuiTypography-buttonLabelNav css]-')
      .contains("Resources");
  }
}
