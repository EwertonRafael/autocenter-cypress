import { elements as el } from "./elements"
class Login {
    acessarPagina() {
        cy.visit('https://beta.autocenterapp.com/')
    }
    acessarMenuLogin() {
        cy.get(el.toggleButton).click()
        cy.xpath(el.loginBotton).click()
    }
    realizarLogin(usuario) {
        cy.get(el.emailInput).type(usuario.email)
        cy.get(el.passwordInput).type(usuario.senha)
        cy.get(el.submitButton).click()
    }
}

export default new Login()