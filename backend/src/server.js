const express = require('express');
const mongoose = require('mongoose');

//importa o arquivo routes.js
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://matheus:9898juice@matheus-fscmu.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//GET POST PUT DELETE

// req.query = acessar query params do json (para filtros na consulta)
// req.params = acessar route params (para edição e deletar)
// req.body = acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);