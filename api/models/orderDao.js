const { json } = require('express')
const dataSource = require('./dataSource')

const addOrder = async (userId, newPoint) => {
    const result = await dataSource.query(`
        INSERT INTO orders (
            user_id,
            status_id,
            amount
        ) VALUES (
            ?,
            ?,
            ?
        )`,
        [userId, newPoint]
    )

    return result.insertId
}

const updateOrderStatus = async (orderId) => {
    const result = await dataSource.query(`
        UPDATE orders
        SET
            status_id = 1
        WHERE
            id = ?
    `,  [orderId]
    )

    return result.affectedRows
}

module.exports = {
    addOrder,
    checkOrderId,
    updateOrderStatus
}