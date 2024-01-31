const express = require('express')
const router = express.Router()
const taskService = require('../../services/task.service')



// get all tasks
router.get('/', async (req, res) => {
    const tasks = await taskService.getAlltasks()
    res.send(tasks)
})
// add task
router.post('/', async (req, res) => {
    console.log(req.body);
    // const {details , date}=req.body
    await taskService.addNewtask(req.body)
    res.send("sucsses")
    // TODO

})
router.delete('/deleteAll', async (req, res) => {
    try {
        let del = await taskService.delAll()
        res.send("delete all")
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/:id', async (req, res) => {
    // const tasks = await taskService.getAlltasks()
    // console.log(req.params.id)
    // let pos = tasks.findIndex(t => t._id == req.params.id)
    // console.log(pos)
    // if (pos == -1) res.sendStatus(404)

    await taskService.del(req.params.id) // 10
    res.send("delete")
})





router.put('/doneAll', async (req, res) => {
    try {
        let done = await taskService.doneAll()
        res.send("done all")
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/:id', async (req, res) => {
    await taskService.done(req.params.id) // 10
    res.send("done")
})

module.exports = router