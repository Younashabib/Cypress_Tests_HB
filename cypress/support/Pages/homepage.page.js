import { HeaderMenu } from "../Components/header.menu";
import { SearchBar } from "../Components/search-bar";
export class HomePage {
  get getHeaderMenu() {
    return new HeaderMenu();
  }

  get getSearchBar() {
    return new SearchBar();
  }

  get tryItForFreeButton() {
    return cy.contains("button", "Try it free");
  }

  get requestADemoButton() {
    return cy.contains("button", "Request a demo");
  }
}
