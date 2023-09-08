# Modificador de Preço

Este é um projeto de um sistema que permite a modificação de preços de produtos. Ele é composto por um backend Node.js, um front-end React.js e um banco de dados MySQL.

## Requisitos de Pré-instalação

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js(v16.14.2): [Download Node.js](https://nodejs.org/)
- npm (gerenciador de pacotes do Node.js): Normalmente, já vem com o Node.js.
- MySQL(8): [Download MySQL](https://dev.mysql.com/downloads/mysql/)

## Configuração do Banco de Dados

1. Instale o MySQL e crie um banco de dados vazio.

2. Crie um novo arquivo chamado `.env` na raiz do diretório back-end e configure as variáveis de ambiente relacionadas ao banco de dados, `DB_USER`, `DB_PASS`.
   
   ```bash
   DB_USER = "user_do_mySql"
   DB_PASS = "senha_do_mySql"

4. Importe os dados do arquivo `./sql/database.sql` para o banco de dados:

## Configuração do Backend

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```
O servidor Node.js estará em execução em http://localhost:8888.

## Configuração do Frontend

1. Navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo React estará em execução em http://localhost:5173.

Uso
Agora que tudo está configurado, você pode começar a usar o aplicativo. Abra seu navegador e acesse http://localhost:5173 para acessar a interface do usuário. O backend estará servindo os dados e ações necessárias para o frontend.

**OBS.: Arquivos aceitos dentro do software, somente em formato .csv**

