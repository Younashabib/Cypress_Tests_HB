import { HeaderMenu } from "./Solutions/header.menu";
import { SearchBar } from "../Components/search-bar";
export class HomePage {
  getHeaderMenu() {
    return new HeaderMenu();
  }

  getSearchBar() {
    return new SearchBar();
  }

  tryItForFreeButton() {
    return cy.contains("button", "Try it free");
  }

  requestADemoButton() {
    return cy.contains("button", "Request a demo");
  }
}
