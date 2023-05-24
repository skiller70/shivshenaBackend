const bcrypt = require("bcryptjs");
const mongoModel = require("../database/schema")


module.exports = async (req, res, next) => {

    try {

        const { password } = req.body;
        const { username } = req.body;
        const oldUser = await mongoModel.User.find({ username });
       
        if (!oldUser[0]) {
            return res.status(500).send("invalid username or password");
        }

        if (oldUser[0] && bcrypt.compareSync(password.toString(), oldUser[0].password)) {
            const data = {
                id: oldUser[0]._id,
                username: oldUser[0].username,
                password: oldUser[0].password
            };
            req.auth = data
            next()
            res.end()
        } else {
            return res.status(500).send("invalid username and password")
        }



    } catch (error) {
        if (error) {
            res.status(500).send("failed to login", console.log(error))
        }
    }


}

