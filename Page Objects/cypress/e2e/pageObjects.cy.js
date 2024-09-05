/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import { signupPage } from "../support/pages/signup.page";
const { homePage } = require("../support/pages/home.page");

describe("Teste de Fluxo de Criação de Conta", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });
  it("Deve completar o fluxo de criação de conta com dados aleatórios", () => {
    // Gerando dados aleatórios com faker
    homePage.openMenu("Account");
    let password = faker.internet.password(8);
    let email = faker.internet.email();
    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phoneNumber: faker.number.int(8), // Exemplo de número de telefone aleatório
      email: email,
      password: password,
      repassword: password,
    };
    signupPage.btnSignup().click();
    signupPage.fillSignupForm(user);
    homePage.openMenu("Account");
    cy.get('[data-testid="CustomerEmail"]').should(
      "have.text",
      email.toLowerCase()
    );
  });
});
