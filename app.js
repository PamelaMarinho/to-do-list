const express = require('express')
const checkListRouter = require('./src/routes/checklist.js')
const app = express()

/*use: comando para usar middleware. Vai ver se tem arquivo json e se tiver
vai deixar disponível no req.body(body da requisição*/
//express.json retorna apenas mid que analise json e em requisições
app.use(express.json())

app.use(checkListRouter)
//** se usado: app.use('/checklist', checklistRouter) ao invés do usado acima lá na rota poode deixar só /
//quer dizer que todas as rotas do checklistRouter são derivadas da rota checklist

app.listen(3000, () => {
    console.log('Servidor rodando')
})