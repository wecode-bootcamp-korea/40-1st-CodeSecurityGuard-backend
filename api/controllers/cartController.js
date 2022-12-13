const cartService = require('../services/cartService')
const user = require('../utils/auth')

const createCart = async (req, res) => {
    try{
        const { productId, quantity } = req.body
        const userId = req.user.id
        
        if ( !productId || !quantity ) {
            const error = new Error('KEY_ERROR')
            error.statusCode = 400

            throw error;
        }

        await cartService.createCart(productId, userId, quantity);

        res.status(201).json({ message : "CART_CREATED" })
    }catch (err){
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const updateCart = async (req, res)=>{
    const { quantity, productId } = req.body
    const userId = req.user.id
    
    try{
        const cart = await cartService.updateCart(quantity, productId, userId)
        
        res.status(200).json({ cart })
    } catch(error) {
        res.status(error.statusCode || 400).json({ message: error.message })
    }
}

const getCartByUserId = async (req, res) => {
     const userId = req.user.id

     const carts = await cartService.getCartByUserId(userId)

     res.status(200).json({ data: carts })
} 

const deleteCartByCartId = async (req, res) => {
    const cartId = req.params.cartId
    const userId = req.user.id

    try{
        await cartService.deleteCartByCartId(cartId,userId)

        res.status(204).end()
    }catch (error){
        res.status(error.statusCode || 400).json({ message:error.message })
    }
}


module.exports = {
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}