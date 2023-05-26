const mongoModel = require("../database/schema")

module.exports = async (req,res)=>{

   try {
    const leads = await mongoModel.Leads.find({})
    res.status(200).send(leads)
   } catch (error) {
    
    if(error){
      return res.status(500).send("failed to fetch leads")
    }
   }




}