
describe('CSSLocators', () => {

    it('csslocators', () => {
        cy.visit("http://localhost:5173/user/login")
        cy.get("[name='email']").type("babar@gmail.com")
        cy.get("[name='password']").type("123456")
        cy.get("[type='submit']").click()
    })

  })