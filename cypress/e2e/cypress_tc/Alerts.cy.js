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

    it('Javascript Confirm Alert - OK', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok')
        
    })
    it('Javascript Confirm Alert - Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', () => false);

        cy.get('#result').should('have.text','You clicked: Cancel')
        
        
    })

    it('Javascript Prompt Alert - OK', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text','You entered: welcome')

        
    })
    it('Javascript Prompt Alert - Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt', () => false);
        cy.get('#result').should('have.text','You entered: null')
        
    })

    it.only('Authenticated Alert', () => {

        // approach 1
        /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                        {
                                                                            username: "admin", 
                                                                            password: "admin"
                                                                        }
                                                                    } );
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')*/

        // approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain','Congratulations!')
        
        
    })
})
