const mongoModel = require("../database/schema")

module.exports = async (req,res) =>{
    const {title,text} = req.body
    console.log(req.file)
try {

    const newImage = new mongoModel.Media({title,text,filename:req.file.filename})
    await newImage.save()
   res.status(200).send("file upload successfully")
} catch (error) {
    if(error){
        return res.status(500).send("failed to upload image")
    }
}





}