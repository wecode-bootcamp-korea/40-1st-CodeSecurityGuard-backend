const orderService = require('../services/orderService')

const addOrder = async (req, res) => {
    try {
        const {userId, newPoint} = req.body;
        let result = await orderService.addOrder(userId, newPoint)
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