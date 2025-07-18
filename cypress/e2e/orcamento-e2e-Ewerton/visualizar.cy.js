import criarOrcamento from '../../pages/orcamento-pages-Ewerton/criar/index'
import visualizarOrcamento from '../../pages/orcamento-pages-Ewerton/visualizar'

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