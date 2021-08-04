const express = require('express')

const router = express.Router()
const Checklist = require('../models/checklist')

// pode usar somente '/' se no app **
router.get('/', (req, res) => {
    console.log('foi feita uma requisição get')
    res.send('rota certa')
})

router.post('/', async (req, res) => {
    let {name} = req.body
    try {       
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    console.log (req.params.id)
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router;