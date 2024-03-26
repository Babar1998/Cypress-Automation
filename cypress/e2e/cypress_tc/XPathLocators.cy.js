
describe('XPATHLocators', () => {

    it('no. of products', () => {
        cy.visit("https://reactjs-ecommerce-app.vercel.app/product")
        cy.wait(10000)
        cy.xpath("(//div[@class='card text-center h-100'])//img").should('have.length', 20)
        
    })

    it('chained xpaths', () => {
        cy.visit("https://reactjs-ecommerce-app.vercel.app/product")
        cy.wait(10000)
        cy.xpath("(//div[@class='card text-center h-100'])").xpath(".//p").should('have.length', 20)
        
    })

  })