/// <reference types="cypress" />

class SignupPage {
  btnSignup() {
    return cy.get('[data-testid="signUp"]');
  }

  firstName() {
    return cy.get('[data-testid="firstName"]');
  }

  lastName() {
    return cy.get('[data-testid="lastName"]');
  }

  phoneNumber() {
    return cy.get('[data-testid="phone"]');
  }

  email() {
    return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]');
  }

  password() {
    return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]');
  }

  repassword() {
    return cy.get('[data-testid="repassword"]');
  }

  btnCreate() {
    return cy.get('[data-testid="create"]');
  }

  fillSignupForm(user) {
    this.firstName().type(user.firstName);
    this.lastName().type(user.lastName);
    this.phoneNumber().type(user.phoneNumber);
    this.email().type(user.email);
    this.password().type(user.password);
    this.repassword().type(user.repassword);
    this.btnCreate().click();
  }
}

export const signupPage = new SignupPage();
