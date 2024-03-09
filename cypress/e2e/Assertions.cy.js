
describe('Assertions Demo', () => {

    it('Implicit Assertions', () => {
        cy.visit("https://reactjs-ecommerce-app.vercel.app/product")
        cy.url().should('include', 'ecommerce')
        cy.url().should('eq', 'https://reactjs-ecommerce-app.vercel.app/product')
        cy.url().should('contain', 'product')
        
    })

  })


  