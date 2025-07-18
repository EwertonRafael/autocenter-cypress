import criarOrcamento from '../../pages/orcamento-ewerton'
import filtrarOrcamento from '../../pages/filtrarOrcamento-Ewerton'


// Ignora erros da aplicação causados por OneSignal ou iframes
Cypress.on('uncaught:exception', (err) => {
    return err.message.includes('postMessage') ? false : true
})

beforeEach(function () {
    cy.fixture('usuario').then((usuario) => {
        cy.login(usuario)
    })
})

describe('Filtrar Orçamento', () => {
    it('Deve filtrar um orçamento', function () {
        criarOrcamento.acessarPaginaOrcamento()
        filtrarOrcamento.filtrarPeloNomePlacaOrcamento()
        filtrarOrcamento.resultadoFiltrado()
    })
})