const mongoModel = require("../database/schema")
module.exports = async (req, res) => {
    const { title, text, link } = req.body

    try {

        const newPress = new mongoModel.Press({ title, text, link, filename: req.file.filename })
        await newPress.save()
        res.status(200).send("file upload successfully")
    } catch (error) {
        if (error) {
            return res.status(500).send("failed to upload image")
        }
    }


}