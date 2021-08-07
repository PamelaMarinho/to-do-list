const express = require('express')

const router = express.Router()
const Checklist = require('../models/checklist')

// pode usar somente '/' se no app **
router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find()
        res.status(200).render('checklists/index', {checklist: checklists})
    } catch (error) {
        res.status(422).render('pages/error', {error: 'erro durante validação'})
    }
})

router.get('/new', async( req, res) => {
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', {checklist: checklist})
    } catch (error) {
        res.status(500).render('pages/error', {errors: 'Erro ao carregar o formulario'})
    }
})

router.post('/', async (req, res) => {
    let {name} = req.body.checklist
    let checklist = new Checklist({name})
    try {       
        await checklist.save()
        res.redirect('/checklists')
    } catch (error) {
        res.status(422).render('checklists/new', {checklist: {...checklist, error}})
    }
})

router.get('/:id', async (req, res) => {    
        try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', {checklists: checklist})
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