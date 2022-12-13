const express = require('express');
const cartController = require('../controllers/cartController')
const {loginRequired} = require('../utils/auth')
const router = express.Router();

router.post('/',loginRequired,cartController.createCart)
router.patch('/',loginRequired,cartController.updateCart)
router.get('/',loginRequired,cartController.getCartByUserId)
router.delete('/:cartId',loginRequired,cartController.deleteCartByCartId)

module.exports ={
    router
}