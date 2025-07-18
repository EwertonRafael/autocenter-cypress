import criarOrcamento from '../../pages/orcamento-ewerton/index'
import visualizarOrcamento from '../../pages/visualizarOrcamento-Ewerton'

// Ignora erros da aplicação causados por OneSignal ou iframes
Cypress.on('uncaught:exception', (err) => {
  return err.message.includes('postMessage') ? false : true
})

beforeEach(function () {
  cy.fixture('usuario').then((usuario) => {
    cy.login(usuario)
  })
})

describe('Visualizar Orçamento', () => {
  it('Deve visualizar um orçamento criado com sucesso', () => {
    criarOrcamento.acessarPaginaOrcamento()
    visualizarOrcamento.selecionarLinha()
    visualizarOrcamento.botaoVisualizar()
    visualizarOrcamento.validarVisualizacao()
  })
})