# tec502-pbl1-api

<p align="center">
  <img src="https://i.imgur.com/zy7N2Jp.png" alt="Monitoring" width="480px" height="510px">
</p>

## 📖 Descrição do Projeto ##
> **Resolução do problema 1 do MI - Concorrência e Conectividade (TEC 502) - [Universidade Estadual de Feira de Santana (UEFS)](https://www.uefs.br/).**<br/><br/>
O projeto trata-se de uma API REST desenvolvida utilizando [Node.Js](https://nodejs.org/en/docs/), que tem como função disponibilizar através do protocolo HTTP a lista dos pacientes que estão utilizando o [dispositivo de sensores](https://github.com/AllanCapistrano/tec502-pbl1-sensors), assim como todas as informações dos mesmos. Dessa forma, é possível monitorar os pacientes sem a obrigação de utilizar o programa [monitoramento de pacientes](https://github.com/AllanCapistrano/tec502-pbl1-monitoring), sendo necessário somente consumir esta API REST.

### ⛵ Navegação pelos projetos: ###
- [Servidor](https://github.com/AllanCapistrano/tec502-pbl1-server)
- [Emulador de Sensores](https://github.com/AllanCapistrano/tec502-pbl1-sensors)
- [Monitoramento de Pacientes](https://github.com/AllanCapistrano/tec502-pbl1-monitoring)
- \> API REST

### 📂 Tecnologias utilizadas: ### 
- [Node.Js](https://nodejs.org/en/docs/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)

### 📦 Dependências: ### 
- [express](https://expressjs.com/)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)

------------

## 💻 Como utilizar ##
1. Instale o [Node.Js](https://nodejs.org/en/download/) caso necessário;
2. Instale o [Yarn](https://yarnpkg.com/getting-started/install), também é possível utilizar o [NPM](https://docs.npmjs.com/) (instalado juntamento com o Node.Js);
3. Faça o download deste repositório ou clone-o com o seguinte comando:
```powershell
$ git clone https://github.com/AllanCapistrano/tec502-pbl1-api.git
```
4. Após instalar o NodeJs e o Yarn/NPM, abra um terminal no diretório do projeto, e digite:
```powershell
$ yarn install
```
5. Após as dependências estarem instaladas, atualize-as digitando o seguinte comando:
```powershell
$ yarn upgrade
```
6. No arquivo [ListPatientsService.ts](https://github.com/AllanCapistrano/tec502-pbl1-api/blob/main/src/services/ListPatientsService.ts), edite a constante `FILE_PATH` para o caminho onde está o arquivo `patients.json`. Caso não tenha modificado, o mesmo estará na raiz do projeto [tec502-pbl1-server](https://github.com/AllanCapistrano/tec502-pbl1-server);
7. Para inciar o projeto, ainda no terminal digite:
```powershell
$ yarn dev
```
8. Acesse a rota `localhost:3000/patients`.

###### Obs: Caso deseje utilizr o NPM, basta substituir `yarn` por `npm` nos comandos anteriores. ######
###### Obs2: No passo `5`, se estiver utilizando o NPM, o comando correto é `npm update`. ######

------------

## 👨‍💻 Autor ##

| [![Allan Capistrano](https://github.com/AllanCapistrano.png?size=100)](https://github.com/AllanCapistrano) |
| -----------------------------------------------------------------------------------------------------------|
| [Allan Capistrano](https://github.com/AllanCapistrano)                                                     |

<p>
    <h3>Onde me encontrar:</h3>
    <a href="https://github.com/AllanCapistrano">
        <img src="https://github.com/AllanCapistrano/AllanCapistrano/blob/master/assets/github-square-brands.png" alt="Github icon" width="5%">
    </a>
    &nbsp
    <a href="https://www.linkedin.com/in/allancapistrano/">
        <img src="https://github.com/AllanCapistrano/AllanCapistrano/blob/master/assets/linkedin-brands.png" alt="Linkedin icon" width="5%">
    </a> 
    &nbsp
    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=asantos@ecomp.uefs.br">
        <img src="https://github.com/AllanCapistrano/AllanCapistrano/blob/master/assets/envelope-square-solid.png" alt="Email icon" width="5%">
    </a>
</p>

------------

## ⚖️ Licença ##
[GPL-3.0 License](https://github.com/AllanCapistrano/tec502-pbl1-api/blob/main/LICENSE)
