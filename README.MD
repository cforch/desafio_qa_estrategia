![picture alt](./imagens/estrategia-concursos.png "Estratégia Logo")

# DESAFIO QA ESTRATEGIA

## INTRODUÇÃO

Este projeto foi desenvolvimento utilizando o Cypress, que é um framework de testes automatizados end-to-end usando JavaScript, usando Node.js para execução dos códigos.
Também, incluso neste projeto, consta o conceito BDD (Behavior Driven Development), que é uma técnica de desenvolvimento ágil das funcionalidades da aplicação, relacionando-se com a verificação e validação delas.
Assim, esta arquitetura é capaz de validar casos de testes frontend(Web) e backend(API).
E, no projeto, usamos a ideia de page objects para os testes frontend(Web), pois a ideia é criar um arquivo.js para cada página ou fluxo da aplicação, se for necessário.
Desta forma, mantemos a organização e facilitamos a manutenção do código.

Sendo assim, segue a especificação da estrutura, definindo as pastas:

integration -> Nesta pasta colocamos os arquivos com os cenários escrito no formato BDD. (Features)
support/pages -> Seguindo a ideia de Page Objetcs, nesta pasta consta arquivos das páginas contendo as funcionalidades e os fluxos.
support/elements -> Possuindo o mesmo conceito da pasta anterior, aqui somente colocamos os elementos.
support/steps -> Nesta pasta, colocamos os passos que farão conexão entre o BDD(Features) e os scripts.
cypress.json -> neste arquivo podemos realizar configurações globais do projeto. Ex: setar URL padrão.

O desafio de QA do estratégia consta com automação web e Api, e um pedido de report de bugs e/ou melhorias caso seja encontrado.
Sendo assim, adiciona-se ao projeto uma pasta contendo: bugs.txt e melhorias.txt

## INSTALAÇÃO E EXECUÇÃO

### REQUERIMENTOS

--> Acesse o site, baixe e instale a versão para seu computador dos seguintes recursos:
- [Node.js](https://nodejs.org/en/download/)  
- [Git](https://git-scm.com/download/) 
- [IDE](https://code.visualstudio.com/) Obs: Eu usei VSCode, mas pode usar qualquer IDE de sua preferência.

### EXECUTANDO O PROJETO

Os comandos são executados no terminal (Linux).
Caso seja windows, recomendo usar algum console emulator do terminal, como [Cmder] (https://cmder.net/)

*1* - Dentro do seu repositório desejado, clone o projeto e acesse-o:

```sh 
git clone https://github.com/cforch/desafio_qa_estrategia.git 
``` 
```sh
cd desafio_qa_estrategia
```

*2* - Instale as depedências do projeto para executá-lo:

```sh
npm install
```

*3* - Execute o projeto:

É possivel executar visualizando a execução no navegador ou somente o processo pelo terminal, sendo que ambas terá report de videos.

*Somente rodando o processo no terminal*
```sh
npm run test
```

*visualização da execução dos testes no navegador*
```sh
npm run test-chrome
```
### OBSERVAÇÃO PARTE 2 - API

Como a API: http://54.174.86.218 não está disponivel. Não consegui executar os testes, e testar as chamadas coerentemente.
Alguns pontos:
1 - Criei uma pasta em "Cenários API" que consta 2 arquivos, um arquivo.feature e outro arquivo.spec.js
2 - Criei o arquivo .feature, para demonstrar que seria possivel realizar cenários de API em BDD, contudo não fez sentido eu implementar por completo, pois nem teria como testar.
3 - Criei o arquivo API_Parte2.spec.js para demonstrar de como seria minha lógica de programação em relação a testes de API, mas obviamente não consegui testar, sendo assim, pode constar algum erro de execução. 
4- Em "desafio_qa_estrategia\cypress\integration" coloquei um arquivo TestAPI.spec.js que é um fluxo de testes de API, validando algunas chamadas de API Fake. Fiz isso como um plus somente pra rodar algo de testes de API.