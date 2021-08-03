//configuração para conectar o mongoose com o mongo
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('conectado ao mongodb'))
    .catch(err=> console.log(err))

    /*useNewUrlParser=> pq mongoose.connect é obsoleto. o drive mongodb reescreveu a ferramenta que analisa string de conexão, para usar o novo analisador de string é necessário usar essa flag. 
    useUnifiedTopology=> remove suporte para várias opções de conexões que não são mais relevantes com o novo mecanismo de topologia*/