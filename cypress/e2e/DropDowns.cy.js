/// <reference types ="Cypress" />
describe('handle dropdowns', () => {

    it('Dropdown with select', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country')
        .select('Canada')
        .should('have.value', 'canada')
        
    }) 

    it('Dropdown without select', () => {
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

    it('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('cypress automation')
        cy.wait(4000)
        cy.get('div.wM6W7d>span').should('have.length', 13)
        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if($el.text() == 'cypress automation tutorial'){
                cy.wrap($el).click()
            }
        })
        cy.get('#APjFqb').should('have.value', 'cypress automation tutorial')
    })

})