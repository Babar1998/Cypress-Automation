/// <reference types ="Cypress" />
describe('Asset CRUD', () => {

    it.only('Asset `Read', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("input[type='email']").type("erohaladmin@gmail.com")
        cy.get("input[type='password']").type("erohal")
        cy.get(".btn-text").click()
    })

    it('Asset `Creation', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("input[type='email']").type("erohaladmin@gmail.com")
        cy.get("input[type='password']").type("erohal")
        cy.get(".btn-text").click()
    })

    it('Asset `Update', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("input[type='email']").type("erohaladmin@gmail.com")
        cy.get("input[type='password']").type("erohal")
        cy.get(".btn-text").click()
    })

    it('Asset `Delete', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("input[type='email']").type("erohaladmin@gmail.com")
        cy.get("input[type='password']").type("erohal")
        cy.get(".btn-text").click()
    })
    
  })