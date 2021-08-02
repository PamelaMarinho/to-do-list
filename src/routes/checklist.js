const express = require('express')

const router = express.Router();

//pode usar somente '/' se no app **
router.get('/', (req, res) => {
    console.log('foi feita uma requisição get')
    res.send('rota certa');
})

router.post('/', (req, res) => {
    console.log('foi feita uma requisição tipo post')
    console.log(req.body)
    res.status(200).json(req.body)
})

router.get('/:id', (req,res) => {
    console.log(req.params.id)
    res.send(`ID ${req.params.id}`)
})

router.put('/:id', (req,res) => {
    console.log(req.params.id)
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req,res) => {
    console.log(req.params.id)
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router;