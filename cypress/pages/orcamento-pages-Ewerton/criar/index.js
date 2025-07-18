import { elements as el } from './elements'

class CriarOrcamento {
    acessarPaginaOrcamento() {
        cy.get(el.acessarPaginaOrcamento).click()
    }
    botaoNovoOrcamento() {
        cy.xpath(el.botaoCriarNovoOrcamento).click()
    }
    dadosDoCliente(orcamento) {
        cy.xpath(el.inputPlaca).type(orcamento.placa)
        cy.xpath(el.inputKM).type(orcamento.KM)
        cy.get(el.modalInputKM).click()
        cy.xpath(el.inputCPFCliente).type(orcamento.CPFCliente)
        cy.xpath(el.inputNomeCliente).type(orcamento.nomeCliente)
        cy.xpath(el.inputTelefoneCliente).type(orcamento.telefoneCliente)
    }

    proximo() {
        cy.get(el.botaoProximo).should('be.visible').click()
    }

    dadosDoServico(orcamento) {
        cy.xpath(el.inputProduto).type(orcamento.produto)
        cy.xpath(el.inputQuantidade).type(orcamento.quantidade)
        cy.xpath(el.inputValorUnitario).type(orcamento.valorUnitario)
    }

    botaoEnviar() {
        cy.get(el.botaoEnviar).click()
    }
    validarMensagemSucesso() {
        cy.xpath('/html/body/div[6]/div')
            .should('be.visible')
            .and('contain', 'Orçamento criado com sucesso!')
    }
    finalizarOrcamento() {
        cy.xpath(el.botaoFecharModal).click()
    }
}

export default new CriarOrcamento()
