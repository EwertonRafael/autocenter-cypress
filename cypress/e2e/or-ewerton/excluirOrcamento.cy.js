import criarOrcamento from '../../pages/orcamento-ewerton/'
import visualizarOrcamento from '../../pages/visualizarOrcamento-Ewerton'
import excluirOrcamento from '../../pages/excluirOrcamento-Ewerton'
// Ignora erros da aplicação causados por OneSignal ou iframes
Cypress.on('uncaught:exception', (err) => {
  return err.message.includes('postMessage') ? false : true
})

beforeEach(function () {
  cy.fixture('usuario').then((usuario) => {
    cy.login(usuario)
  })
})
describe('Excluir Orçamento', () => {
    it('Deve excluir um orçamento que já está criado', function () {
        criarOrcamento.acessarPaginaOrcamento()
        visualizarOrcamento.selecionarLinha()
        excluirOrcamento.excluirOrcamento()
        excluirOrcamento.confirmarExclusaoOrcamento()
    })
})