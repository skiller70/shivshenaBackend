const mongoose = require("mongoose")


const user = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }


})


const media = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    filename:{ type: String, required: true },


})



const User = mongoose.model("User", user)
const Media = mongoose.model("Media",media)



module.exports = { User,Media }