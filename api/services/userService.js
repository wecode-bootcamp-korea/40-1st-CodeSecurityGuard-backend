const bcrypt = require('bcrypt')

const { userDao } = require('../models')

const hashPassword = async (plainTextPassword) => {
    try {
        const SALT_ROUNDS = 12;
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        return hashedPassword;
    } catch {
        const error = new Error('INVALID_HASH')
        error.statusCode = 400
        throw error
    }
}

const signUp = async (name, email, password, phoneNumber) => {
    const emailRegex    =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
	const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    if ( !name || !email || !password || !phoneNumber ) {
        const error = new Error('KEY_ERROR')
        error.statusCode = 400
        
        throw error;
    }

    if ( !emailRegex.test(email)) {
        const error = new Error('INVALID_EMAIL')
        error.statusCode = 400

        throw error;
    }

    if ( !passwordRegex.test(password)) {
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