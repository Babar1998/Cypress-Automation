
describe('CSSLocators', () => {

    it('csslocators', () => {
        cy.visit("http://localhost:5173/")
        cy.wait(5000)
        cy.get(".nav-item").contains("Login").click()
        cy.get("[name='email']").type("babar@gmail.com")
        cy.get("[name='password']").type("123456")
        cy.wait(5000)
        cy.get("[type='submit']").click()
        cy.wait(5000)
        cy.get(".nav-item").contains("Products").click()
        cy.wait(5000)
        cy.get("[type='search']").type("Acer")
        cy.wait(5000)
        cy.get(".nav-item").contains("Logout").click()
        
    })

  })