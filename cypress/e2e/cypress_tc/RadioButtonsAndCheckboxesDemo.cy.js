
describe('Check UI Elements', () => {

    it('Checking Radio Buttons', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')
    })

    it('Checking Check Boxes', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        // cy.get("input#sunday").should('be.visible')
        // cy.get("input#sunday").check().should('be.checked')
        // cy.get("input#sunday").uncheck().should('not.be.checked')


        // cy.get("input#monday").should('be.visible')
        // cy.get("input#monday").check().should('be.checked')
        // cy.get("input#monday").uncheck().should('not.be.checked')


        // cy.get("input#tuesday").should('be.visible')
        // cy.get("input#tuesday").check().should('be.checked')
        // cy.get("input#tuesday").uncheck().should('not.be.checked')

        // cy.get("input#wednesday").should('be.visible')
        // cy.get("input#wednesday").check().should('be.checked')
        // cy.get("input#wednesday").uncheck().should('not.be.checked')

        // cy.get("input#thursday").should('be.visible')
        // cy.get("input#thursday").check().should('be.checked')
        // cy.get("input#thursday").uncheck().should('not.be.checked')

        // cy.get("input#friday").should('be.visible')
        // cy.get("input#friday").check().should('be.checked')
        // cy.get("input#friday").uncheck().should('not.be.checked')

        // cy.get("input#saturday").should('be.visible')
        // cy.get("input#saturday").check().should('be.checked')
        // cy.get("input#saturday").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").should('be.visible')
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })

   
})