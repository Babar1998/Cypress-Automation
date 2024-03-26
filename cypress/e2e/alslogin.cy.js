/// <reference types ="Cypress" />
describe('Login Test', () => {

    it('ALS Agent Login', () => {
        cy.visit("https://beta.alsharqi.co/core-ui/#/login")
        cy.get("[type='email']").type("squad_lead@alsharqi.co")
        cy.get("#password").type("password1")
        cy.get(".button").click()
    })
  })