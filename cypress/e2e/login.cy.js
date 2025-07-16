import Login from '../pages/login/index.js';

describe('Login', () => {
    beforeEach(function() {
        cy.fixture('usuario').as('dadosUsuario');
    })
    it('Realizar login com sucesso', function() {
        Login.acessarPagina();
        Login.acessarMenuLogin();
        Login.realizarLogin(this.dadosUsuario);
    })
})