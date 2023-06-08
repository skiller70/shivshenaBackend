const mongoModel = require("../database/schema")

module.exports = async(req,res)=>{
    try {
        await mongoModel.Press.findByIdAndDelete({ _id: req.body.id })
        res.status(200).send("press deleted successfully")

    } catch (error) {
       if(error){
        res.status(500).send("press to delete video")
       }
    }
    

}