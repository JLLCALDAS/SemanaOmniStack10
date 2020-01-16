//Métodos HTTP GET, POST, PUT, DELETE;

//Tipos de parâmetros:
// Query Params: req.query (filtros, ordenacao paginacao, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (são dados para criação ou alteração de um registro)

//MongoDB (não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-yzgtz.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);