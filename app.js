const express = require('express')
const path = require('path')

const checkListRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')

require('./config/database') //importando configuração. quando der o require o database.js vai rodar e conectar com o bd

const app = express()
/*use: comando para usar middleware. Vai ver se tem arquivo json e se tiver
vai deixar disponível no req.body(body da requisição*/
//express.json retorna apenas mid que analise json e em requisições
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'public')))//dizendo ao express o local dos arquivos estáticos

app.set('views', path.join(__dirname,'src/views')) //dizendo ao express que as views estao em src/views
app.set('view engine', 'ejs') //dizendo ao express que a view engine é o ejs

//app.use(checkListRouter) => deve deixar a rota completa no checklist
//** se usado: app.use('/checklist', checklistRouter) ao invés do usado acima lá na rota poode deixar só /
//quer dizer que todas as rotas do checklistRouter são derivadas da rota checklist
app.use('/', rootRouter)
app.use('/checklist',checkListRouter)

app.listen(3000, () => {
    console.log('Servidor rodando')
})
