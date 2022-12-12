const express = require('express');
const orderController = require('../controllers/orderController');
const {loginRequired} = require('../utils/auth')

const router = express.Router();

router.post('/', orderController.addOrder)
router.patch('/undo/:orderId', orderController.updateOrderStatus)

module.exports = {
    router
}
