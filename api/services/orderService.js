const orderDao = require('../models/orderDao')

const addOrder = async (userId, price) => {
        const result = await orderDao.addOrder(userId, price)
        return result
}

module.exports = {
    addOrder
}