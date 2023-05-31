const mongoModel = require("../database/schema")

module.exports = async (req,res) =>{
    const {title,text,link} = req.body
    
try {

    const newImage = new mongoModel.Media({title,text,link,filename:req.file.filename})
    await newImage.save()
   res.status(200).send("file upload successfully")
} catch (error) {
    if(error){
        return res.status(500).send("failed to upload image")
    }
}





}