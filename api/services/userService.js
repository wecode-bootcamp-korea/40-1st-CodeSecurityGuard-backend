const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userDao = require('../models/userDao')
const { emailValidator, passwordValidator } = require('../utils/validator')


const hashPassword = async (plainTextPassword) => {
    
        const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        
        return hashedPassword;
}

const signUp = async (name, email, password, address, phoneNumber) => {
    emailValidator(email);
    passwordValidator(password);
    const hashedPassword = await hashPassword(password)
    return await userDao.createUser(name, email, hashedPassword, address, phoneNumber)
}

const signIn = async (email, password) => {
    emailValidator(email);
    passwordValidator(password);

    const user = await userDao.getUserByEmail(email)
    const match = await bcrypt.compare(password, user.password.toString());

    if(!match){
        throw new Error('passwordMatchErr')
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