const express = require('express')

const router = express.Router();

//pode usar somente '/' se no app **
router.get('/checklist', (req, res) => {
    console.log('foi feita uma requisição get')
    res.send('rota certa');
})

router.post('/checklist', (req, res) => {
    console.log('foi feita uma requisição tipo post')
    console.log(req.body)
    res.status(200).json(req.body)
})
module.exports = router;