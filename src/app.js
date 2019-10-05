const express = require('express');

const app = express();

const port = 8080;
const hostname = "127.0.0.1";

// Resposta com método GET com uma mensagem 'Olá, mundo!'.
app.get('/', (req, res) =>{
    return res.send('Ola mundo!');

});

// Middleware HTTP ERROR 404
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(port, hostname,() => {
console.log(`Servidor rodando em http://${hostname}:${port}`);

});