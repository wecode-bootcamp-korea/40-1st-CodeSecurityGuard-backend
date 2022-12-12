const express = require('express');
const cartController = require('../controllers/cartController')
//const {loginRequired} = require('../utils/auth')
const router = express.Router();

router.post('',cartController.createCart)
router.patch('',cartController.updateCart)
router.get('', cartController.getCartByUserId)
router.delete('', cartController.deleteCartByCartId)

module.exports ={
    router
}