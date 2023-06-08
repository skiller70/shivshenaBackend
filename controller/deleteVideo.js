const mongoModel = require("../database/schema")


module.exports = async (req, res) => {

    
    try {
        await mongoModel.Video.findByIdAndDelete({ _id: req.body.id })
        res.status(200).send("video deleted successfully")

    } catch (error) {
       if(error){
        res.status(500).send("failed to delete video")
       }
    }
}