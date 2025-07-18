// Ignora erros da aplicação causados por OneSignal ou iframes
Cypress.on('uncaught:exception', (err) => {
  return err.message.includes('postMessage') ? false : true
})

beforeEach(function () {
  cy.fixture('usuario').then((usuario) => {
    cy.login(usuario)
  })
  cy.fixture('orcamento').as('dadosOrcamento')
})

describe('Acessa página de orçamento', () => {
  it('Deve acessar página de orçamento', function () {
    cy.goto('Orçamentos','ORÇAMENTOS')
  })
})

