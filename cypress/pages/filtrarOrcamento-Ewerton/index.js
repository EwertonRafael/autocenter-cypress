import { elements as el } from './elements';
class FiltrarOrcamento {
    filtrarPeloNomePlacaOrcamento() {
        cy.get(el.inputFiltrar).type('2496')
    }
    resultadoFiltrado() {
        cy.get(el.inputFiltrar).should('be.visible')
    }
}
export default new FiltrarOrcamento();