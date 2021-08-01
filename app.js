const express = require('express')

const app = express()

/*use: comando para usar middleware. Vai ver se tem arquivo json e se tiver
vai deixar disponível no req.body(body da requisição*/
//express.json retorna apenas mid que analise json e em requisições
app.use(express.json())

const log = (req, res, next) => {
    console.log(req.body)
    console.log('it was created by myself')
    next()
}

app.use(log)

app.get('/', (req,res) => {
    res.send('haha')
})

app.get('/json', (req,res) => {
    console.log(req.body) //vai imprimir se foi usado o app.use acima
    res.json ({nome:'Pamela', idade: 65})
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})