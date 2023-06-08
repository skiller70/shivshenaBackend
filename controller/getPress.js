const mongoModel = require("../database/schema")

module.exports = async (req,res)=>{

    try {
        const result = await mongoModel.Press.find({})
        res.status(200).send(result)
    } catch (error) {
        if(error){
            res.status(500).send("something went wrong")
        }
        
    }


}