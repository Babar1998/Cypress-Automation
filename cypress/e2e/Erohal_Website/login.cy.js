/// <reference types ="Cypress" />
describe('Login Test', () => {

    it('Erohal ACC Login', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("input[type='email']").type("erohaladmin@gmail.com")
        cy.get("input[type='password']").type("erohal")
        cy.get(".btn-text").click()
    })
  })