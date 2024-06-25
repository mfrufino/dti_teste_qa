Projeto criado utilizando Appium + WebDriver.IO  para vaga de QA Pleno/Senior na empresa DTI


<h3> Requerimentos de sistema </h3>
<ul>
  <li>Java</li>
  <li>Node JS</li>
  <li>Appium</li>
  <li>Webdriver.io</li>
  <li>Android studio</li>
</ul>


<h3> Variáveis de ambiente </h3>
<ul>
  <li>JAVA_HOME</li>
  <li>ANDROID_HOME</li>
</ul>

  
<h3> Passos para rodar o projeto </h3>

<ol>
  <li>Faça download da pasta ou clone o repositório</li>
  <li>Após confirmar que o Appium está instalado na maquina rode npm install @appium/doctor -g para garantir que nenhum requisito esteja faltando</li>
  <li>Abra a pasta do projeto no terminal e rode o comando npm install, isso irá baixar todas as bibliotecas mencionadas no arquivo package.json</li> 
  <li>No arquivo wdio.conf.js altere os capabilities de acordo com as informações do simulador/aparelho onde os testes serão executados</li>
  <li>Por padrão o appium server está rodando no endereço local usando a porta 4723. Caso queira alterar a porta altere o campo "port" no arquivo wdio.conf.js</li>
  <li>Para rodar os testes basta digitar o comando npx wdio</li>
</ol>
