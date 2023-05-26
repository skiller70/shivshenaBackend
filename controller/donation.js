const mongoModel = require("../database/schema")

module.exports = async (req, res) => {
    const { name, email, number, donationType, amount } = req.body
    try {
        console.log(req.body)
        const saveDonation = new mongoModel.Donation({ name, email, number, donationType, amount })

        await saveDonation.save()
        res.status(200).send("payment successful")

    } catch (error) {

        if (error) {

            const saveFailedDonation = new mongoModel.FailedDonation({ name, email, number, donationType, amount })

            await saveFailedDonation.save()
            return res.status(500).send("failed to payment")
        }
    }

}