const express = require("express")
require("./database/connectDatabase")
const app = express()
const router = require("./routes/route")
app.use("/", router)




        
















app.listen(4000, () => { console.log("server is running") })