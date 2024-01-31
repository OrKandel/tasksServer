const express = require('express')
const router = express.Router()
const taskService = require('../../services/task.service')



// get all tasks
router.get('/', async (req, res) => {
    const tasks = await taskService.getAlltasks()
    res.send(tasks)
})
// add task
router.post('/', (req, res) => {
    console.log(req.body);

    // TODO

})

router.delete('/:id', async (req, res) => {
    const tasks = await taskService.getAlltasks()
    let pos = tasks.findIndex(t => t._id == req.params.id)
    if (pos == -1) res.sendStatus(404)

    delete tasks[pos] // 10
    res.send("delete")
})

module.exports = router