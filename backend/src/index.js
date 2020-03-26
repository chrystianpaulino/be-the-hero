const express = require('express');
const cors    = require('cors');
const routes  = require('./routes'); // ./ para informar que não é um pacote, e sim um arquivo

const app = express(); // variavel que vai armazenar a aplicação

app.use(cors());
app.use(express.json()); // converter json do body em js request.body
app.use(routes);



app.listen(3333); // aplicação ouvir rota localhost::3333"

/**
 * Driver do Banco de dados: SELECT * FROM users;
 * Query Builder: Scripts utilizando JS - table('users).select('*').where() - aceita qualquer banco sql - KNEX.JS
 */

 /**
  * npx executa um pacote ao invés de instalar
  */