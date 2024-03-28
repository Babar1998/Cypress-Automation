// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types ="Cypress" />
/// <reference types ="cypress-xpath" />

Cypress.Commands.add('loginALS', () => {
    cy.visit("http://localhost:4600/#/login",{failOnStatusCode: false});    
    cy.get("[data-cy='LoginUserName']").type("shark@alsharqi.co", {force:true});
    cy.get("[data-cy='LoginUserPassword']").type("password1", {force:true});
    // cy.get("#usernameUserInput").type("shark@alsharqi.co");    
    // cy.get("#password").type("password1");    
    cy.get("#signInButton").click();
    cy.url().should('include', '/dashboard')
})

Cypress.Commands.add('loginALSBeta', () => {
    cy.visit("https://beta.alsharqi.co/#/login",{failOnStatusCode: false});
    cy.get("#usernameUserInput").type("shark@alsharqi.co");
    cy.get("#password").type("password1");
    cy.get("#signInButton").click();
})

Cypress.Commands.add('loginAgent', () => {
    cy.visit("https://beta.alsharqi.co/core-ui/#/login",{failOnStatusCode: false});
    cy.xpath("//input[@type='email']").type("squad_lead@alsharqi.co", {force: true})        
    cy.xpath("//input[@type='password']").type("password1", {force: true});
    cy.xpath("//button[normalize-space()='Sign In']").click({force: true})
})
Cypress.Commands.add('loginAgentBeta', () => {
    cy.visit("https://beta.alsharqi.co/core/#/login",{failOnStatusCode: false});
    cy.xpath("(//div[@class='q-field__control relative-position row no-wrap'])[1]").type("squad_lead@alsharqi.co");
    cy.xpath("(//div[@class='q-field__control relative-position row no-wrap'])[2]").type("password1");
    cy.xpath("(//button[@id='signInButton'])[1]").click()
})

Cypress.Commands.add('loginAgentBetaAndGoToDeclaration', () => {
    cy.visit("https://beta.alsharqi.co/core-ui/#/login",{failOnStatusCode: false});
    cy.xpath("//input[@type='email']").type("squad_lead@alsharqi.co", {force: true})        
    cy.xpath("//input[@type='password']").type("password1", {force: true});
    cy.xpath("//button[normalize-space()='Sign In']").click({force: true})
    cy.wait(2000);        

    cy.xpath("//a[normalize-space()='Activities']").click({force: true})
    cy.wait(1000)
    cy.xpath("//a[normalize-space()='Declaration Management']").click({force: true})
    cy.wait(1000)
    cy.xpath("//a[normalize-space()='Declarations']").click({force: true})
    cy.wait(1000)                
    cy.url().should('contain', 'declarations')
    cy.wait(2000)
})

Cypress.Commands.add('accErohalLogin', () => {
    cy.visit("https://acc.erohal.io/#/login", {failOnStatusCode: false});
    cy.get("input[type='email']").type("erohaladmin@gmail.com")
    cy.get("input[type='password']").type("erohal")
    cy.get(".btn-text").click()
})
