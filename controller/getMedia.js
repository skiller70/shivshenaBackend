const mongoModel = require("../database/schema")

module.exports = async (req, res) => {



    try {


        const getMedia = await mongoModel.Media.find({})

        return res.status(200).send(getMedia)
    } catch (error) {
        if (error) {
            return res.status(500).send("failed to fetch data")
        }
    }


}