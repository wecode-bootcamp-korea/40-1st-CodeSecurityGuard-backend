const orderDao = require('../models/orderDao')

const addOrder = async (userId, price) => {
    try {
        const result = await orderDao.addOrder(userId, price)
        const updateUserPoint = await orderDao.updateUserPoint(userId, price)

        return [result, updateUserPoint]
    } catch (err) {
        throw err
    }
}


module.exports = {
    addOrder
}