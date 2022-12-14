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

const createUser = async (name, email, hashedPassword, address, phoneNumber) => {
    try {
        const result = await dataSource.query(`
            INSERT INTO users (
                namee,
                email,
                password,
                address,
                phone_number
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?
            )`,
            [name, email, hashedPassword, address, phoneNumber]
        )
        return result.insertId
    } catch {
        throw new Error('createUserErr')
    }
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById
}
