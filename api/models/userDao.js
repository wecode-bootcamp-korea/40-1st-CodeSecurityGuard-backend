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
    return result [0]
}

module.exports = {getUserByEmail}