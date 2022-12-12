const dataSource = require('./dataSource')

const getUserByEmail = async (email) => {
    const result = await dataSource.query(`
        SELECT
              id,
              name,
              email,
              password
         FROM users
         WHERE email =?`, [email]
    )
    return result[0]
}

const getUserById = async (id) => {
	const result = await dataSource.query(`
		SELECT 
			id,
			name,
			email,
			password,
            phone_number AS phoneNumber
		FROM users
		WHERE id=?`, [id]
	)
	return result[0]
}

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
    } catch (err) {
        throw err
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById
}
