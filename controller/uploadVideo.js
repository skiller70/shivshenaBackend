const mongoModel = require("../database/schema")

module.exports = async (req, res) => {
    try {
        const { title, text } = req.body
        const uploadVideo = new mongoModel.Video({ title, text, filename: req.file.filename })
        await uploadVideo.save()
        res.status(200).send("video upload successfully")

    } catch (error) {

      if(error){
        res.status(500).send("something went wrong")
      }

    }
}