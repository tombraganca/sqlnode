# PostGreSQL utilizando o Sequelize

## Sequelize

<div style="display: flex;">
    <a style="width:100%;" href="https://sequelize.org/">
        <img src="assets/postgresql logo.svg" alt="drawing" width="100"/>
    </a>
    <p style="padding: 15px">
    Sequelize é um ORM TypeScript e Node.js moderno para Postgres, MySQL, MariaDB, SQLite e SQL Server e muito mais. Apresentando suporte a transações sólidas, relações, carregamento rápido e lento, replicação de leitura e muito mais.
    </p>
</div>

## PostGreSQL

<div style="display: flex;">

<a style="width:100%" href="https://www.postgresql.org/">
    <img src="assets/elephant.png" alt="drawing" width="100"/>
</a>
<p style="padding: 15px">
O PostgreSQL é um poderoso sistema de banco de dados relacional de objeto de código aberto que usa e estende a linguagem SQL combinada com muitos recursos que armazenam e dimensionam com segurança as cargas de trabalho de dados mais complicadas. As origens do PostgreSQL remontam a 1986 como parte do projeto POSTGRES na Universidade da Califórnia em Berkeley e tem mais de 30 anos de desenvolvimento ativo na plataforma principal.
</p>
</div>

## Aplicação

Para executar a aplicação foi necessário a criação de um contaner que gere os bancos de dados SQL em questão. Para isso foi utilizado o Docker para a criação do container.

### Docker

O Docker é uma plataforma aberta para desenvolvimento, envio e execução de aplicativos. O Docker permite que você separe seus aplicativos de sua infraestrutura para que você possa entregar software rapidamente. Com o Docker, você pode gerenciar sua infraestrutura da mesma forma que gerencia seus aplicativos. Ao aproveitar as metodologias do Docker para enviar, testar e implantar código rapidamente, você pode reduzir significativamente o atraso entre escrever o código e executá-lo na produção.

<a style="width:100%;" href="https://docs.docker.com/get-docker/">
        <img src="assets/download.png" alt="drawing" width="200"/>
</a>

## Executando

> 1 - É necessário instalar o docker na sua maquina.

> 2 - Após a instalação do docker entre na pasta do projeto e rode o comando: <p>
`docker compose docker-compose.yml up --build`
</p>

> 3 - Rode o comando: <p>
`yarn run dev`
</p>

Se tudo der certo o seu terminal irá aparecer que está conectado na porta 3333.

Garanta que essas portas estajam disponiveis.
