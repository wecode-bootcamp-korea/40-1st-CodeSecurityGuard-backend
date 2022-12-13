const express = require('express');
const orderController = require('../controllers/orderController');
const {loginRequired} = require('../utils/auth')

const router = express.Router();

router.post('/', loginRequired, orderController.addOrder)
router.patch('/', loginRequired, orderController.updateUserPoint)

module.exports = {
    router
}
