const dataSource = require('./dataSource')

const createUser = async (name, email, hashedPassword, phoneNumber) => {
    try {
        const result = await dataSource.query(`
            INSERT INTO users (
                name,
                email,
                password,
                phone_number
            ) VALUES (
                ?,
                ?,
                ?,
                ?
            )`,
            [name, email, hashedPassword, phoneNumber]
        )

        return result.insertId
    } catch {
        const error = new Error('Cannot create user')
        error.statusCode = 400
        throw error
    }
}

module.exports = {
    createUser
}