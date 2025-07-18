import { elements as el } from "./elements";

class VisualizarOrcamento {
    selecionarLinha() {
        cy.xpath(el.linhaSelecionada).click();
    }
    botaoVisualizar() {
        cy.xpath(el.botaoVisualizar).click();
    }
    validarVisualizacao() {
        cy.get(el.visualizacaoDoOrcamento).should('contain', 'Data de Emissão');
    }
}
export default new VisualizarOrcamento();