const express = require('express');

const app = express();

app.get('/',(req, res) =>{
    return res.json(
        {
            message: "Olá Cliente"
        })
});

app.listen(3333);