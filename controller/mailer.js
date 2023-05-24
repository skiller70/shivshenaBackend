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















module.exports = async () => {
    try {

        const mailOptions = {
            from: 'singhlucky007007@gmail.com',
            to: 'dota.pro786@gmail.com',
            subject: 'from shivShena ',
            text: `
            name: ${name}  
            email: ${email}
            about: ${about}`
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send("something went wrong")
            } else {
                return res.status(200).send(" email sent successfully ")
            }
        })



    } catch (error) {
        res.status(500).send("something went wrong")
    }






}

