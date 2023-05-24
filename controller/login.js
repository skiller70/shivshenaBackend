require("dotenv").config()
const jwt = require("jsonwebtoken")



module.exports = (req, res) => {
console.log(req.auth)
const {username,password} = req.auth
    try {
        const data = { username,password}

        const token = jwt.sign(data, process.env.JWT)
        res.status(200).send(token)
    } catch (error) {

        res.status(500).send("internal server error")
    }


} 