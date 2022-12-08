const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { getUserByEmail } = require('../models/userDao');

const hashPassword = async(plaintexPassword) =>{
    const saltRound = 12;
    const salt = await bcrypt.genSalt(saltRound);

    return await bcrypt.hash(plaintexPassword, salt);
}

const signIn = async (email, password) =>{
    const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    //const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/

    if(!emailRegex.test(email)){
        const error = new Error('INVALID_EMAIL')
        error.statusCode = 401

        throw error
    }

    // if(!passwordRegex.test(password)){
    //     const error = new Error('INVALID_PASSWORD')
    //     error.statusCode = 401

    //     throw error
    // }

    const user = await getUserByEmail(email)

    const match = await bcrypt.compare(password, user.password.toString());

    if(!match){
        const error = new Error('WRONG_PASSWORD')
        error.statusCode = 401

        throw error
    }

    const accessToken = jwt.sign({id: user.id}, process.env.JWT_SECRET,
         {
             algorithm: process.env.ALGORITHM,
             expiresIN: process.env.JWT_SECRET_IN

         }
    )

    return accessToken
}

module.exports = { 
    signIn
}