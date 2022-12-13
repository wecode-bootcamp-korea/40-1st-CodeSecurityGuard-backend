const orderService = require('../services/orderService')

const addOrder = async (req, res) => {
    try {
        const {userId, price} = req.body;
        let result = await orderService.addOrder(userId, price)
        res.status(200).json({ data : "ORDER_COMPLETE" })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const updateUserPoint = async (req, res) => {
    try {
        const { userId, newPoint } = req.body;
        let result = await orderService.updateUserPoint(userId, newPoint)
        res.status(200).json({ message : "USER_POINT_UPDATED" })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}
module.exports = {
    addOrder,
    updateUserPoint
}