const orderService = require('../services/orderService')

const addOrder = async (req, res) => {
    try {
        const {userId, productId, quantity, amount, address} = req.body;
        let result = await orderService.addOrder(userId, productId, quantity, amount, address)
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const updateOrderStatus = async (req, res) => {
    try {
        const orderId = +req.params.orderId
        const result = await orderService.updateOrderStatus(orderId)
        res.status(200).json({ affectedRows : result })
    } catch (err) {
        throw err
    }
}

module.exports = {
    addOrder,
    updateOrderStatus
}