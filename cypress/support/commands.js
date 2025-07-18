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
import { elements as el}  from "./../pages/login/elements.js"
Cypress.Commands.add('login', (usuario) => {
    cy.visit('https://beta.autocenterapp.com/')
    cy.get(el.toggleButton).click()
    cy.xpath(el.loginBotton).click()
    cy.get(el.emailInput).type(usuario.email)
    cy.get(el.passwordInput).type(usuario.senha)
    cy.get(el.submitButton).click()
})

// -- This is a access page --
Cypress.Commands.add('goto', (btnName, titlePage) => {
    cy.contains('button', btnName).should('be.visible').click()

    cy.contains('h1', titlePage).should('be.visible')
})
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
require('cypress-xpath');