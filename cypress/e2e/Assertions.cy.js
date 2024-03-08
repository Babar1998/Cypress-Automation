
describe('Assertions Demo', () => {

    it('Implicit Assertions', () => {
        cy.visit("https://www.daraz.pk/shop/xiaomi/?spm=a2a0e.home.search.9.35e34076twkD18&tab=allproducts&_keyori=ss&from=search_history&sugg=Xiaomi%20Flagship%20Store_8_1")
        cy.url().should('include', 'daraz.pk')
        cy.url().should('eq', 'https://www.daraz.pk/shop/xiaomi/?spm=a2a0e.home.search.9.35e34076twkD18&tab=allproducts&_keyori=ss&from=search_history&sugg=Xiaomi%20Flagship%20Store_8_1')
        cy.url().should('contain', 'xiaomi')
        
    })

  })


  