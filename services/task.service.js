const taskController = require('../DL/controllers/tasks.controller')


async function getAlltasks() {

    let task = await taskController.read({})
    return task

}

async function del(id) {

    let task = await taskController.del(id)
    return task
}

async function delAll() {

    let task = await taskController.delAll()
    return task
}

async function done(id) {

    let task = await taskController.done(id)
    return task
}

async function doneAll() {

    let task = await taskController.doneAll()
    return task
}



async function addNewtask(reqData) {
    let data = await taskController.create(reqData)
    return data


}
module.exports = { addNewtask, getAlltasks, del, delAll, doneAll, done }