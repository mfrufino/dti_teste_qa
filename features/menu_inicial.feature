# language: pt
# encode: UTF-8

@menu_login
Funcionalidade: Testar as funcionalidades do menu login da aplicação

@menu_login_1
Esquema do Cenario: Usuário acessa a aplicação e informa credenciais invalidas
    Dado que acesso a tela de login do aplicativo
    Quando informo um <nome_usuario> e <senha>
    Então valido que uma mensagem informando que o usuario nao existe foi exibida
Exemplos:
|nome_usuario      |senha     |
|'bob@example.com' |'1234'    |
|'joe doe'         |'10203040'|

#faltou mapear o elemento da mensagem nesse cenario, notebook morreu
@menu_login_2 
Esquema do Cenario: Usuário acessa a aplicação e tenta se logar deixando um dos campos em branco
    Dado que acesso a tela de login do aplicativo
    Quando deixo <nome_usuario> ou <senha> campo em branco
    Então valido que uma <mensagem> informando que o campo eh obrigatorio
|nome_usuario      |senha     |mensagem               |
|'bob@example.com' |''        |'Password is required' |
|''                |'10203040'|'Username is required' |

@menu_login_3
Cenario: Usuário acessa a aplicação e informa um nome de usuario valido e uma senha valida
    Dado que acesso a tela de login do aplicativo
    Quando informo um nome de usuario valido e uma senha valida
    Então valido que fui logado com sucesso