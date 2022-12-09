const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao')
const validator = require('../utils/validator')


const hashPassword = async (plainTextPassword) => {
    
        const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        
        return hashedPassword;
}

const signUp = async (name, email, password, phoneNumber) => {
    
    if (validator.emailValidator(email)) {
        const error = new Error('INVALID_EMAIL')
        error.statusCode = 400

        throw error;
    }

    if (validator.passwordValidator(password)) {
        const error = new Error('INVALID_PASSWORD')
        error.statusCode = 400

        throw error;
    }

    const hashedPassword = await hashPassword(password)
    return await userDao.createUser(name, email, hashedPassword, phoneNumber)
   
}
const signIn = async (email, password) =>{

    if(validator.emailValidator(email)){
        const error = new Error('INVALID_EMAIL2')
        error.statusCode = 401

        throw error
    }

    if(validator.passwordValidator(password)){
        const error = new Error('INVALID_PASSWORD2')
        error.statusCode = 401

        throw error
    }

    const user = await userDao.getUserByEmail(email)

    const match = await bcrypt.compare(password, user.password.toString());

    if(!match){
        const error = new Error('WRONG_PASSWORD')
        error.statusCode = 401

        throw error
    }

    const accessToken = jwt.sign({id: user.id}, process.env.JWT_SECRET,
         {
             algorithm: process.env.ALGORITHM,
             expiresIn: process.env.JWT_EXPIRES_IN

         }
    )

    return accessToken
}


module.exports = {
    signUp,
    signIn
}