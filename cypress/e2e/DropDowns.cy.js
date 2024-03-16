/// <reference types ="Cypress" />
describe('handle dropdowns', () => {

    it.skip('Dropdown with select', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country')
        .select('Canada')
        .should('have.value', 'canada')
        
    }) 

    it.skip('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('United Arab Emirates').type('{enter}')
        cy.get('#select2-billing_country-container')
        .should('have.text', 'United Arab Emirates')
        
    })

    it('Auto Suggest Dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Pakistan')
        cy.get('.suggestion-title').contains('Pakistan').click()
        
    })

    it.skip('Dynamic Dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Pakistan')
        cy.get('.suggestion-title').contains('Pakistan').click()
        
    })

})