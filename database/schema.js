const mongoose = require("mongoose")

// ADMIN LOGIN SCHEMA
const user = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})
// ADMIN LOGIN SCHEMA



// MEDIA POSTS 
const media = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    filename: { type: String, required: true },
})
// MEDIA POSTS 

// LEADS
const lead = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    about: { type: String, required: true }
})
// LEADS


// DONATIONS
const donation = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    donationType: { type: String, required: true },
    amount:{type:Number,required:true}
})
// DONATIONS


// FAILED DONATIONS
const failedDonation = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    donationType: { type: String, required: true },
    amount:{type:Number}
})
// FAILED DONATIONS


const User = mongoose.model("User", user)
const Media = mongoose.model("Media", media)
const Leads = mongoose.model("Leads", lead)
const Donation = mongoose.model("Donation", donation)
const FailedDonation = mongoose.model("FailedDonation",failedDonation)



module.exports = { User, Media,Donation,Leads,FailedDonation}