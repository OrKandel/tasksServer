require("dotenv").config()
const express = require('express')
const app = express()

const db = require('./db')
db.connect()

const cors = require('cors');
app.use(cors())
app.use(express.json())

const taskRouter = require('./DL/router/task.router')
app.use('/', taskRouter)


app.listen(2600, () => console.log("**** Server is up ****"))
