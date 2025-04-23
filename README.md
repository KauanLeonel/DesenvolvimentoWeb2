# Revisão 

## Node, NPM e JavaScript

- Arquitetura cliente e servidor web;
- JavaScript;
- NPM (Node Packet Manager(qualquer biblioteca, pacote))
- NPM init - Ele vai criar o repositório e MAIS, vai criar o arquivo JSON   
- NPM i/install [nome do pacote] [nome do pacote]

## Setup do Projeto
-Pasta src: Ele vai separar os arquivos de configurações do projeto e os de código
- "type": "module" - Serve para mudar o de require para export na hora de importar os arquivos do projeto.
- PacketJson - Configurar o projeto (Criado no inicio do projeto) / package-lock - O conjunto de pacotes (Criado na primeira instalação de dependencia do projeto)/ node_modules - Os pacotes em si e as dependências das dependências (Criado na primeira instalação de dependencia do projeto)//VAI CAIR NA PROVA
Se não tiver o node_modules ou o package-lock, basta usar o npm i ele instalará de novo.
NÃO EXCLUIR O PACKAGE-LOCK

## Express
- O que é?
- Framework(Conjunto de ferramentas, funções) para o Node, auxilia na criação de API e para subi-lo 
- Routes serve para reunir o cojunto de rotas em um arquivo separado, ele vai facilitar a manutenção, a escalabilidade do projeto.
- Métodos da API - Get, post, put, patch, delete;
- A ordem dos endPoints, das urls, importam, porque, dependendo da ordem, caso tiver endpoint concorrentes, ele irá influenciar;
router.get("/list", getPropertyController)

router.get("/:id", () => {})

Caso o ID for por cima, ele não irá entrar em list nunca.

- Req e Res, request e respond
- Json (formato de entrada e saída)

## MVC
- Oq é?
- Forma de estruturar/organizar amplamente conhecido. Tanto para ensinar, quanto para manutenção;
- Modelo - Regra de negócios e acesso ao banco de dados.
- View - FrontEnd, é a parte que interage com o usuário
- CONTROLLER - Aplicar o model nessa regra de negócio. Manipular o fluxo da aplicar, receber as entradas, processamentos e saída.


## Prisma

- Prisma é uma ORM - ORM (Object-Relational Mapping) é uma técnica de programação que permite mapear objetos de um sistema orientado a objetos para estruturas de banco de dados relacionais (como tabelas e colunas). 
- npm i prisma -D : Instalação do Prisma, o -D serve para o desenvolvedor
- Gerar um Schema com tabelas já prontas: npx prisma db pull
- Para enviar o Schema quando não tiver tabelas: npx prisma db push

APÓS ISSO
- npm i @prisma/client
- Prisma Client: São as funções criadas para administar o banco.
-Para o modelo funcionar, precisa criar o prisma generate, para criar o modelo no prisma Client: npx prisma generate