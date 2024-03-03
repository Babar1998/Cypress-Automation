

describe('Daraz', () => {

    it('daraz', () => {
        cy.visit("https://www.daraz.pk/")
        cy.get("#q").type("Acer")
        // cy.wait(2000)
        // cy.get(".nav-item").contains("Products").click()
        
        // cy.wait(5000)
        // cy.get(".nav-item").contains("Logout").click()
        
    })

  })