const orderDao = require('../models/orderDao')

const addOrder = async (userId, price) => {
    try {
        const result = await orderDao.addOrder(userId, price)
        return result 
    } catch (err) {
        throw err
    }
}

const updateUserPoint = async (userId, newPoint) => {
    try {
        const result = await orderDao.updateUserPoint(userId, newPoint)
        return result
    } catch (err) {
        throw err
    }
}

module.exports = {
    addOrder,
    updateUserPoint
}