/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')


describe("Teste de Fluxo de Checkout", () => {
  it("deve fazer login e depois completar o fluxo de compra até o checkout", () => {
    cy.login(email, senha);
    cy.checkout();
  });
});