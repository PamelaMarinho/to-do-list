const express = require('express')

const router = express.Router();

//pode usar somente '/' se no app **
router.get('/checklist', (req, res) => {
    console.log('aqui tem o checklist')
    res.send('rota certa');
})

module.exports = router;