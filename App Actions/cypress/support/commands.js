// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { homePage } from "./pages/home.page";
import loginPage from "./pages/login.page";

Cypress.Commands.add("login", (email, senha) => {
  cy.setCookie("ebacStoreVersion", "v2", {
    domain: "lojaebac.ebaconline.art.br",
  });
  cy.visit("/");
  homePage.openMenu("Account");
  loginPage.login(email, senha);
  homePage.openMenu("Browse");
});
Cypress.Commands.add("checkout", () => {
  cy.get(
    '[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]'
  ).click();
  cy.get('[data-testid="addToCart"]').click();

  cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();
  cy.get('[data-testid="completeCheckout"]').click();
  cy.get(
    ':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1'
  ).should("have.text", "Order Success");
});
