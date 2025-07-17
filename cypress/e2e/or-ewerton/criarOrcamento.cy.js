import criarOrcamento from '../../pages/orcamento-ewerton'

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

describe('Criar Orçamento', () => {
  it('Deve criar um orçamento com sucesso', function () {
    criarOrcamento.acessarPaginaOrcamento()
    criarOrcamento.botaoNovoOrcamento()
    criarOrcamento.dadosDoCliente(this.dadosOrcamento)
    criarOrcamento.proximo()
    criarOrcamento.dadosDoServico(this.dadosOrcamento)
    criarOrcamento.botaoEnviar()
    criarOrcamento.validarMensagemSucesso() 
    criarOrcamento.finalizarOrcamento()
  })
})
