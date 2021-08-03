//configuração para conectar o mongoose com o mongo
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('conectado ao mongodb'))
    .catch(err=> console.log(err))