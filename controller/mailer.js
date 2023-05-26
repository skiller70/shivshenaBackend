const nodemailer = require('nodemailer');
const mongoModel = require("../database/schema")

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

    console.log(req.body)
    try {
        const { name, email, number, about } = req.body

        const mailOptions = {
            from: 'singhlucky007007@gmail.com',
            to: 'dota.pro786@gmail.com',
            subject: 'from shivShena ',
            text: `
            name: ${name}  
            email: ${email}
            number: ${number}
            about: ${about}`
        };


        await transporter.sendMail(mailOptions)
        const saveLead = new mongoModel.Leads({ name, email, number, about })
        await saveLead.save()
        return res.status(200).send("email sent successfully")

        // console.log(info)
        // if (info) {
        //     const saveLead = new mongoModel.Leads({ name, email, number, about })
        //     await saveLead.save()
        //     return res.status(200).send("email sent successfully")
        // } else {

        //     return res.status(500).send("something went wrong")

        // }


    } catch (error) {
        if (error) {
            return res.status(500).send("something went wrong")
        }
    }






}

