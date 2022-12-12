const orderDao = require('../models/orderDao')

const addOrder = async (userId, productId, quantity, amount, address) => {
    try {
        let orderId = Math.ceil(Math.random() * 100000000)
        const checkOrderId = await orderDao.checkOrderId()
        
        for (let i = 0; i < checkOrderId.length; i++) {
            if (orderId == checkOrderId[i].order_id) {
                orderId = orderId * 1.1
            }
        }

        const completedStatusId = 2;
        const completedOrderMessage = "결제완료";

        const result = await orderDao.addOrder(orderId, userId, completedStatusId, productId, quantity, amount, address, completedOrderMessage)
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