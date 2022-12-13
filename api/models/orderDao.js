const { json } = require('express')
const dataSource = require('./dataSource')

const addOrder = async (userId, price) => {
    try {
        const result = await dataSource.query(`
            INSERT INTO orders (
                user_id,
                amount
            ) VALUES (
                ?,
                ?
            )`,
            [userId, price]
        )

        return result.affectedRows
    }
    catch {
        const error = new Error('FAILED_TO_ADD_ORDER')
        error.statusCode = 400
        throw error
    }
}

const updateUserPoint = async (userId, newPoint) => {
    try {    
        const result = await dataSource.query(`
            UPDATE users
            SET
                point = ?
            WHERE
                id = ?
        `,  [newPoint, userId]
        )

        return result.affectedRows
    } catch {
        const error = new Error('FAILED_TO_UPDATE_USER_POINT')
        error.statusCode = 400
        throw error
    }
}

module.exports = {
    addOrder,
    updateUserPoint
}