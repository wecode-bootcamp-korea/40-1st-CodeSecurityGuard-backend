const jwt = require('jsonwebtoken')
const { getUserById } = require('../services/userService')

const loginRequired = async (req, res, next) => {

    //! CHECK TOKEN
    const accessToken = req.headers.authorization

    if (!accessToken) {
        const error = new Error('NEED_ACCESS_TOKEN')
        error.statusCode = 401

        return res.status(error.statusCode).json({ message : error.message })
    }

    //! VERIFY TOKEN
    const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET)

    //! CHECK USER EXISTENCE
    const user = await getUserById(decoded.id)
    if (!user) {
        const error = new Error('USER_DOES_NOT_EXIST')
        error.statusCode = 404

        return res.status(error.statusCode).json({ message : error.message })
    }

    //! GRANT ACCESS
    req.user = user;
    next();
}

module.exports = { loginRequired }