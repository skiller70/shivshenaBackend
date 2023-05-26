const mongoModel = require("../database/schema")

module.exports = async (req, res) => {

    try {
        await mongoModel.Media.findByIdAndDelete({_id:req.body.id})
        res.status(200).send("media deleted successfully ")
    } catch (error) {
        if (error) {    
           return res.status(500).send("failed to delete Media")
        }
    }





}