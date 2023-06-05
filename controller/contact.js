const mongoModel = require("../database/schema")
const nodemailer = require('nodemailer');


// CONFIGURATION
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
        user: 'singhlucky007007@gmail.com',
        pass: 'imfshybzzgqageaj',
    },
});

// CONFIGURATION


module.exports = async (req, res) => {


    try {
        const { name, email, number, message } = req.body

        const mailOptions = {
            from: 'singhlucky007007@gmail.com',
            to: 'dota.pro786@gmail.com',
            subject: 'from shivShena ',
            text: `
            name: ${name}  
            email: ${email}
            number: ${number}
            message: ${message}`
        };



        await transporter.sendMail(mailOptions)
        const contactDetail = mongoModel.Contact({ name, email, number, message })
        await contactDetail.save()


        res.status(200).send("Thank you for touching with us")

    } catch (error) {
        if (error) {

            return res.status(400).send("something went wrong")

        }

    }


}