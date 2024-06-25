class LoginTela{
    get inputUsername(){
        return $('//*[@content-desc="Username input field]');
    }

    get inputPassword(){
        return $('//android.widget.EditText[@content_desc="Password input field"]'); 
    }

    get btnLogin(){
        return $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView');
    }

    get errorMessageText(){
        return $('//android.view.ViewGroup["@content-desc="generic-error-message"]/android.widget.TextView');
    }

    /*elemento do cenario 2 que falta
    get flashAlert(){
        return $('aqui vai id dos alertas de campo em branco da pagina login');
    }*/

    async login(usuario, senha){
        await this.inputUsername.setValue(usuario);
        await this.inputPassword.setValue(senha);
        await this.btnLogin.click();
    }
}

module.exports = new LoginTela();