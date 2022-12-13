const { json } = require('express')
const dataSource = require('./dataSource')
const queryRunner = dataSource.createQueryRunner()

const addOrder = async (userId, price) => {
    try {
        await queryRunner.connect()
        await queryRunner.startTransaction()

        await queryRunner.query(`
            INSERT INTO orders 
                (user_id,amount) 
            VALUES 
                (${userId}, ${price})
        `)
        
        await queryRunner.query(`
            UPDATE users
            SET
                point = (point - ${price})
            WHERE
                id = ${userId}
        `)

        let newPoint = await queryRunner.query(`
            SELECT point FROM users WHERE id = ${userId}
        `)

        if (newPoint[0].point < 0) {
           throw err
        }

        await queryRunner.commitTransaction()

    } catch (err) {
        await queryRunner.rollbackTransaction()
        const error = new Error('NOT_ENOUGH_POINTS')
        error.statusCode = 400
        throw error
    }
}

module.exports = {
    addOrder
}