const orderDao = require('../models/orderDao')

const addOrder = async (userId, newPoint) => {
    try {
        const result = await orderDao.addOrder(userId, newPoint)
        return result 
    } catch (err) {
        throw err
    }
}

const updateOrderStatus = async (orderId) => {
    try {
        const result = await orderDao.updateOrderStatus(orderId)
        return result
    } catch (err) {
        throw err
    }
}

module.exports = {
    addOrder,
    updateOrderStatus
}