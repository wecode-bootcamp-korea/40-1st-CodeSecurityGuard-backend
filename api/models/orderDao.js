const { json } = require('express')
const dataSource = require('./dataSource')
const queryRunner = dataSource.createQueryRunner()

const addOrder = async (userId, price) => {
    try {
        await queryRunner.connect()
        await queryRunner.startTransaction()

        await queryRunner.query(`
            INSERT INTO orders 
                (user_id, amount) 
            VALUES 
                (?, ?)
        `, [userId, price]
        )
        
        await queryRunner.query(`
            UPDATE users
            SET
                point = (point - ?)
            WHERE
                id = ?
        `, [price, userId]
        )

        let newPoint = await queryRunner.query(`
            SELECT point FROM users WHERE id = ?
        `, [userId]
        )

        if (newPoint[0].point < 0) {
           error = new Error('INSUFFICIENT_POINT')
           error.statusCode = 400
           throw error
        }

        await queryRunner.commitTransaction()

    } catch (err) {
        await queryRunner.rollbackTransaction()
        if (err.message == 'INSUFFICIENT_POINT') {
            throw err
        } else {
            err.message = 'INVALID_TRANSACTION'
            throw err
        }
    }
}

module.exports = {
    addOrder
}