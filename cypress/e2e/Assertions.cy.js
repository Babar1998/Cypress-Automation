
describe('Assertions Demo', () => {

    it('Implicit Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'greenhrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')
        
        
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath('//a').should('have.length', '5')
    })

    // it('Explicit Assertions', () => {
    //     cy.visit("https://reactjs-ecommerce-app.vercel.app/product")
    //     cy.url().should('include', 'ecommerce')
    //     cy.url().should('eq', 'https://reactjs-ecommerce-app.vercel.app/product')
    //     cy.url().should('contain', 'product')
        
    // })

  })


  