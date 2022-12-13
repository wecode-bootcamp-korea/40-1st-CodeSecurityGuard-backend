const express = require('express');
const cartController = require('../controllers/cartController')
const {loginRequired} = require('../utils/auth')
const router = express.Router();

router.post('/createcart',loginRequired,cartController.createCart)
router.patch('/updateCart',loginRequired,cartController.updateCart)
router.get('/getCartByUserId',loginRequired,cartController.getCartByUserId)
router.delete('/deleteCartByCartId/:cartId',loginRequired,cartController.deleteCartByCartId)

module.exports ={
    router
}