/// <reference types ="Cypress" />
describe('Asset CRUD', () => {

    it.only('Asset `Read', () => {
        cy.accErohalLogin();
        cy.get('[for="menu"] > .v-icon').click();
        cy.get(':nth-child(8) > .posRelA > .toggle-menu > .v-icon').click();
        cy.get(':nth-child(8) > .menu-dropdown > :nth-child(1) > a').click();
    })

    it('Asset `Creation', () => {
        cy.accErohalLogin();
    })

    it('Asset `Update', () => {
        cy.accErohalLogin();
    })

    it('Asset `Delete', () => {
        cy.accErohalLogin();
    })
    
  })