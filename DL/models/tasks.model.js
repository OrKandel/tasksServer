
const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    details: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    },
})


const taskModel = mongoose.model('task', taskSchema)
module.exports = taskModel;
