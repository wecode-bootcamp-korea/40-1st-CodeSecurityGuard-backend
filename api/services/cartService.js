const cartDao = require('../models/cartDao')

const createCart = async (productId, userId, quantity)=>{
    return await cartDao.createCart(productId, userId, quantity)
};

const updateCart = async (quantity, productId, userId) => {
    return await cartDao.updateCart(quantity, productId, userId)
}

const getCartByUserId = async (userId) => {
    return await cartDao.getCartByUserId(userId)
}

const deleteCartByCartId = async (cartId, userId) =>{
    return await cartDao.deleteCartByCartId(cartId, userId)
}

module.exports ={
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}