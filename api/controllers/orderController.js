const orderService = require('../services/orderService')
const { catchAsync } = require('../utils/error')

const addOrder = catchAsync(async (req, res) => {
    const {userId, price} = req.body;
    let result = await orderService.addOrder(userId, price)
    res.status(200).json({ data : "ORDER_COMPLETE" })
})


module.exports = {
    addOrder
}