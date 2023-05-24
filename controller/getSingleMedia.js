const mongoModel = require("../database/schema")

module.exports = async (req, res) => {
    const { id } = req.params

    try {
        const findMedia = await mongoModel.Media.findOne(({ _id: id }))


        return res.status(200).send(findMedia)
    } catch (error) {
        if (error) {
            return res.status(500).send("failed to fetch data")
        }
    }
}