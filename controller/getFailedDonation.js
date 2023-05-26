const mongoModel = require("../database/schema")

module.exports = async (req,res)=>{

try {
    const result = await mongoModel.FailedDonation.find()
    res.status(200).send(result) 
} catch (error) {
    if(error){
        return res.status(500).send("failed to fetch failed donations")
    }
}


}