const express = require('express')

const router = express.Router()
const Checklist = require('../models/checklist')

// pode usar somente '/' se no app **
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({})
        res.status(200).render('checklists/index.ejs', {checklists: checklists})
    } catch (error) {
        res.status(422).render('pages/error', {error: 'erro durante validação'})
    }
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

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', {cl4: checklist})
    } catch (error) {
        res.status(422).render('pages/error', {error: 'algum erro'})
    }
})

router.put('/:id', async (req, res) => {
    let {name} = req.body
    try {        
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name} ,{new:true})
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
      let checklist =  await Checklist.findByIdAndDelete(id)
      res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router;