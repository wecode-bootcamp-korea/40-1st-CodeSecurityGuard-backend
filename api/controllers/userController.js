const userService = require('../services/userService')
// const { catchAsync } = require('../utils/error')

const signUp = async (req, res) => {
    try{   
        const { name, email, password, phoneNumber } = req.body;

        if ( !name || !email || !password || !phoneNumber ) {
            const error = new Error('KEY_ERROR')
            error.statusCode = 400
            
            throw error;
        }

        await userService.signUp(name, email, password, phoneNumber);

        res.status(201).json({ message : "USER_CREATED" })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const signIn = async (req, res) => {
    try{
        const {email, password} = req.body
        const accessToken = await userService.signIn(email, password)
        
        return res.status(200).json({ accessToken: accessToken })
    } catch (err) {
        console.log(err)
        res.status(err.statusCode|| 400).json({message: err.message});
    }
}

module.exports = {
    signUp,
    signIn
}