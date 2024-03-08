
describe('Assertions Demo', () => {

    it('Implicit Assertions', () => {
        cy.visit("http://localhost:5173/products")
        cy.url().should('include', 'localhost:5173')
        cy.url().should('eq', 'http://localhost:5173/products')
        cy.url().should('contain', 'products')
        
    })

  })


  