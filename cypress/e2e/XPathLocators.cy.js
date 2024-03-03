
describe('XPATHLocators', () => {

    it('no. of products', () => {
        cy.visit("http://localhost:5173/products")
        cy.wait(10000)
        cy.xpath("//div[contains(@class,'bg-white h-100vh')]//a").should('have.length', 20)
        
    })

    it('chained xpaths', () => {
        cy.visit("http://localhost:5173/products")
        cy.wait(10000)
        cy.xpath("//div[contains(@class,'bg-white h-100vh')]").xpath(".//a").should('have.length', 20)
        
    })

  })