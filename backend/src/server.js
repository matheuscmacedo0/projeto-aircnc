const express = require('express');

const app = express();

//GET POST PUT DELETE

// req.query = acessar query params do json (para filtros na consulta)
// req.params = acessar route params (para edição e deletar)
// req.body = acessar corpo da requisição (para criação e edição)

app.use(express.json());
app.post('/users',(req, res) =>{
    return res.json(req.body);
});

app.listen(3333);