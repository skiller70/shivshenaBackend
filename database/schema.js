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
    link: { type: String, required: true },
})
// MEDIA POSTS 

// PRESS POST
const press = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    filename: { type: String, required: true },
    link: { type: String, required: true },
})
// PRESS POST



// VIDEO UPLOAD
const video = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
    filename: { type: String, required: true },

})
// VIDEO UPLOAD 




// LEADS
const lead = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String, required: true }
})
// LEADS



// DONATIONS
const donation = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    donationType: { type: String, required: true },
    amount: { type: Number, required: true }
})
// DONATIONS


// FAILED DONATIONS
const failedDonation = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    donationType: { type: String, required: true },
    amount: { type: Number }
})
// FAILED DONATIONS




// CONTACT US
const contact = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String, required: true }
})
// CONTACT US


const User = mongoose.model("User", user)
const Media = mongoose.model("Media", media)
const Leads = mongoose.model("Leads", lead)
const Donation = mongoose.model("Donation", donation)
const FailedDonation = mongoose.model("FailedDonation", failedDonation)
const Contact = mongoose.model("Contact", contact)
const Video = mongoose.model("Video", video)
const Press = mongoose.model("Press",press)



module.exports = { User, Media, Donation, Leads, FailedDonation, Contact,Video,Press}