const { userService } = require('../services')
// const { catchAsync } = require('../utils/error')

const signUp = async (req, res) => {
    try{   
        const { name, email, password, phoneNumber } = req.body;
        await userService.signUp(name, email, password, phoneNumber);

        res.status(201).json({ message : "SIGNUP_SUCCESS" })
    } catch (err) {
        res.status(err.statusCode || 400).json({message: err.message})
    }
}

module.exports = {
    signUp
}