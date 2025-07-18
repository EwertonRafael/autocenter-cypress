import criarOrcamento from '../../pages/orcamento-pages-Ewerton/criar'
import filtrarOrcamento from '../../pages/orcamento-pages-Ewerton/filtrar'


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