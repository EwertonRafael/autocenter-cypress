import { elements as el } from './elements';
class ExcluirOrcamento {
    excluirOrcamento() {
        cy.xpath(el.botaoExcluir).click()
    }
    confirmarExclusaoOrcamento() {
        cy.get(el.botaoExcluirModal).click()
    }
}
export default new ExcluirOrcamento();