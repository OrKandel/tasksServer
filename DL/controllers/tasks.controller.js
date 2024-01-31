const taskModel = require('../models/tasks.model')

async function create(data) {
    return await taskModel.create(data)
}

async function read(filter) {
    const tasks = await taskModel.find({});
    console.log(tasks)
    return tasks
}

async function del(id) {
    return await taskModel.updateOne({ _id: id }, { isDelete: true })
}

async function done(id) {
    return await taskModel.updateOne({ _id: id }, { isDone: true })
}


module.exports = { create, read, del }