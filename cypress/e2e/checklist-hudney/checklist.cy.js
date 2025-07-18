import Checklist from "../../pages/checklist-hudney"

// Ignora erros da aplicação causados por OneSignal ou iframes
Cypress.on('uncaught:exception', (err) => {
  return err.message.includes('postMessage') ? false : true
})

beforeEach(function () {
  cy.fixture('usuario').then((usuario) => {
    cy.login(usuario)
  })
  cy.fixture('checklist').as('buscaChecklist')
})

describe('Busca checklist', () => {
  it('Deve buscar checklist pelo input de busca', function () {
    //Arrange
    //Act
    Checklist.buscaChecklist(this.buscaChecklist)
    //Assert
    cy.contains('td', '344').should('be.visible')
  })
})