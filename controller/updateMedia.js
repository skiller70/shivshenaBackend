const mongoModel = require("../database/schema")

module.exports = async (req, res) => {

    console.log(req.body)
    
     // Specify the update operation using $set
   
    try {
        console.log(req.file.filename)
  await mongoModel.Media.findOneAndUpdate({ _id: req.body.id },{ $set: { text: req.body.text, title: req.body.title, filename: req.file.filename }}, { new: true } )

        res.status(200).send("media update successfully ")

    } catch (error) {

        res.status(500).send("failed to update media ")
    }


}