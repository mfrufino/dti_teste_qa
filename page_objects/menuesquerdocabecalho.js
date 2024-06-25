class MenuEsquerdoCabecalho{
    get expandMenuButton(){
        return $("menu_principal");
    }

    get loginMenuOption(){
        return $('//*["menu_login"]');
    }
}

module.exports = new MenuEsquerdoCabecalho();