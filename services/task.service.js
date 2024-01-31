const taskController = require('../DL/controllers/tasks.controller')


async function getAlltasks() {

    let task = await taskController.read({})
    return task

}

async function addNewtask() {

}
module.exports = { addNewtask, getAlltasks }