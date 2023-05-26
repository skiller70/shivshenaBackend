

const mongoModel = require("../database/schema")
const bcrypt = require("bcryptjs");
const saltRounds = bcrypt.genSaltSync(10);

module.exports = async (req, res) => {
    const { username, password } = req.body
    try {
        const oldUser = await mongoModel.User.find({ username })
    
        if (oldUser[0] !== undefined) {

           return res.status(400).send("this username already exist ")
        } else {
            const hashPassword = bcrypt.hashSync(password.toString(), saltRounds)
            const createUser = new mongoModel.User({ username, password: hashPassword })

            await createUser.save()
           return res.status(200).send("user created successfully")
        }



    } catch (error) {
        if(error){
          return res.status(200).send("failed to register")
        }

    }
}