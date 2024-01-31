const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
async function connect() {
    try {
        mongoose.connect(MONGO_URI)
            .then(() => { console.log("DB - Connection Success") })
    }
    catch (err) {
        console.log("MongoDB Error:", err);
    }
}
module.exports = { connect }