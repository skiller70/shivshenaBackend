const mongoModel = require("../database/schema")
module.exports = async(req,res)=>{

    try {

        const result = await mongoModel.Donation.find({})

            res.status(200).send(result)
                                                                                                            
        
        
    } catch (error) {
        if(error){
                return res.status(500).send("failed to fetch donation")
        }
    }

}