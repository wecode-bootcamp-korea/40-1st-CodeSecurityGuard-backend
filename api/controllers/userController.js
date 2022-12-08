const userService = require('../services')

const signIn = async (req, res) => {
    const {email, password} = req.body

    try{
        const accessToken = await userService.signIn(email, password)
        res.status(200).json({ accessToken })
    }catch (err){
        res.status(err.statusCode|| 400).json({message: err.message});
    }
}

module.exports= {
    signIn
}