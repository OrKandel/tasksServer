const taskModel = require('../models/tasks.model')

async function create(reqData) {
    return await taskModel.create(reqData)
}

async function read(filter) {
    const tasks = await taskModel.find({});
    console.log(tasks)
    return tasks
}

async function del(id) {
    return await taskModel.findByIdAndUpdate(id, { isDelete: true })
}

async function delAll() {
    return await taskModel.updateMany({}, { isDelete: true });
}


async function done(id) {
    return await taskModel.updateOne({ _id: id }, { isDone: true })
}


module.exports = { create, read, del, delAll, done }