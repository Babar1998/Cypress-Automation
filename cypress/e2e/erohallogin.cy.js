
describe('Login Test', () => {


    it('Erohal Login', () => {
        cy.visit("https://acc.erohal.io/#/login")
        cy.get("[type='email']").type("waseem.admin@gmail.com")
        cy.get("[type='password']").type("erohal")
        cy.get(".btn-text").click()  
    })
  })