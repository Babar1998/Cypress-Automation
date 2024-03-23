/// <reference types ="Cypress" />
describe('Alerts', () => {

    it('Javascript Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
        
    })

    it.skip('Javascript Confirm Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        
    })
    it.skip('Javascript Prompt Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        
    })
    it.skip('Authenticated Alert', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        
        
    })
})
