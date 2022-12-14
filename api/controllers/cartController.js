const cartService = require('../services/cartService')
const { catchAsync } = require('../utils/error')


const createCart = catchAsync(async (req, res) => {
    const { productId, quantity } = req.body
    const userId = req.user.id
    
    if ( !productId ) {
        throw new Error('keyErr')
    }

    await cartService.createCart(productId, userId, quantity);
    res.status(201).json({ message : "CART_CREATED" })
})

const updateCart = catchAsync(async (req, res)=>{
    const { quantity, productId } = req.body
    const userId = req.user.id
    
    const cart = await cartService.updateCart(quantity, productId, userId)
    res.status(200).json({ cart })
})

const getCartByUserId = async (req, res) => {
     const userId = req.user.id

     const carts = await cartService.getCartByUserId(userId)

     res.status(200).json({ data: carts })
} 

const deleteCartByCartId = catchAsync(async (req, res) => {
    const cartId = req.params.cartId
    const userId = req.user.id

    await cartService.deleteCartByCartId(cartId, userId)
    res.status(204).end()
})

module.exports = {
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}