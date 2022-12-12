const cartDao = require('../models/cartDao')

const createCart = async (user_id, product_id, quantity)=>{
    return await cartDao.createCart(user_id, product_id, quantity)
};

const updateCart = async (quantity, user_id ) => {
    return await cartDao.updateCart(quantity, user_id)
}

const getCartByUserId = async (user_id) => {
    return await cartDao.getCartByUserId(user_id)
}

const deleteCartByCartId = async (cart_id) =>{
    return await cartDao.deleteCartByCartId(cart_id)
}

module.exports ={
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}