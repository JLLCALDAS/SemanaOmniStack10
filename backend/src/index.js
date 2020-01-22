//Métodos HTTP GET, POST, PUT, DELETE;

//Tipos de parâmetros:
// Query Params: req.query (filtros, ordenacao paginacao, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (são dados para criação ou alteração de um registro)

//MongoDB (não-relacional)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-yzgtz.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => console.log('Server is Running in port 3333, enjoy it !!'));