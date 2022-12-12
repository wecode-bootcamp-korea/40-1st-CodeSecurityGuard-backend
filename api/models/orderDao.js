const { json } = require('express')
const dataSource = require('./dataSource')

const checkOrderId = async () => {
    const result = await dataSource.query(`
        SELECT order_id FROM orders
    `)
    console.log(result[0].order_id)
    return result
}

const addOrder = async (orderId, userId, completedStatusId, productId, quantity, amount, address, completedOrderMessage) => {
    const result = await dataSource.query(`
        INSERT INTO orders (
            order_id,
            user_id,
            status_id,
            product_id,
            quantity,
            amount,
            address,
            order_message
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        )`,
        [orderId, userId, completedStatusId, productId, quantity, amount, address, completedOrderMessage]
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