const bcrypt = require('bcrypt')

const userDao = require('../models/userDao')

const hashPassword = async (plainTextPassword) => {
    
        const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        
        return hashedPassword;
}

const signUp = async (name, email, password, phoneNumber) => {
    const EMAIL_REGEX    = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
	const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if ( !EMAIL_REGEX.test(email)) {
        const error = new Error('INVALID_EMAIL')
        error.statusCode = 400

        throw error;
    }

    if ( !PASSWORD_REGEX.test(password)) {
        const error = new Error('INVALID_PASSWORD')
        error.statusCode = 400

        throw error;
    }

    const hashedPassword = await hashPassword(password)
    return await userDao.createUser(name, email, hashedPassword, phoneNumber)
   
}

module.exports = {
    signUp
}