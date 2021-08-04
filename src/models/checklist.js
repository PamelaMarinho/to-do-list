const mongoose = require('mongoose')

//permite determinar o tipo de doc que o checklist armazenara
const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('Checklist',checklistSchema)

