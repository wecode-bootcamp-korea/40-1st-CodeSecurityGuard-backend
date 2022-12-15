const userService = require('../services/userService')
const { catchAsync } = require('../utils/error')

const signUp = catchAsync(async (req, res) => {
     const { name, email, password, address, phoneNumber } = req.body;
    
    if ( !name || !email || !password || !address || !phoneNumber ) {
        throw new Error('keyErr')
    }

    await userService.signUp(name, email, password, address, phoneNumber);
    res.status(201).json({ message : "USER_CREATED" })
})

const signIn = catchAsync(async (req, res) => {
    const {email, password} = req.body
    const accessToken = await userService.signIn(email, password)
    
    return res.status(200).json({ accessToken: accessToken })
})

module.exports = {
    signUp,
    signIn
}