
describe('XPATHLocators', () => {

    it('no. of products', () => {
        cy.visit("https://reactjs-ecommerce-app.vercel.app/product")
        cy.wait(10000)
        cy.xpath("//div[@class='col-md-4 col-sm-6 col-xs-8 col-12 mb-4']").should('have.length', 20)
        
    })

    // it('chained xpaths', () => {
    //     cy.visit("http://localhost:5173/products")
    //     cy.wait(10000)
    //     cy.xpath("//div[contains(@class,'bg-white h-100vh')]").xpath(".//a").should('have.length', 20)
        
    // })

  })