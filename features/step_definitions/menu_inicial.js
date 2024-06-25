const CatalogoTela = require('../page_objects/catalogo');
const LoginTela = require('../page_objects/login');
const MenuEsquerdoCabecalho = require('../page_objects/menuesquerdocabecalho');


Dado(/^que acesso a tela de login do aplicativo$/, async () => {
    await MenuEsquerdoCabecalho.expandMenuButton.click();
    await MenuEsquerdoCabecalho.loginMenuOption.click();
});

Quando(/^informo um (\w+) e (.+) $/, async (usuario, senha) => {
    await LoginTela.login(usuario, senha);
});

Então(/^valido que uma mensagem informando que o usuario nao existe foi exibida$/, async () => {
    await expect(LoginTela.errorMessageText). toHaveText("Provided credentials do not match any user in this service");
});

Quando(/^deixo um (\w+) ou (.+) em branco $/, async (usuario, senha) => {
    await LoginTela.login(usuario, senha);
});

/*depois que colocar o elemento do cenario 3 descomentar esse step
Então(/^valido que uma (.*) informando que o campo eh obrigatorio$/, async (mensagem) => {
    await expect(LoginTela.flashAlert ). toBeExisting(); 
    await expect(LoginTela.flashAlert ). toHaveText(mensagem);
});*/

Quando(/^informo um nome de usuario valido e uma senha valida$/, async () => {
   await LoginTela.login("bob@example.com", "10203040");
});

Então(/^valido que fui logado com sucesso$/, async () => {
    await expect(CatalogoTela.productsHeader).toHaveText("Products");
});