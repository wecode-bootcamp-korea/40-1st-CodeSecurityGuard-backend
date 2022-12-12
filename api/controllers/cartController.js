const cartService = require('../services/cartService')
//const { catchAsync } = require('../utils/error')

const createCart = async (req, res) => {
    try{
        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity ){
            const error = new Error('KEY_ERROR')
            error.statusCode = 400

            throw error;
        }

        await cartService.createCart(user_id, product_id, quantity);

        res.status(201).json({message : "CART_CREATED"})
    }catch (err){
        res.status(err.statusCode || 400).json({message : err.message})
    }
}

const updateCart = async (req, res)=>{
    try{
        const {user_id, quantity} = req.body

        if (!user_id){
            const error = new Error('CHECK USER_ID')
            error.statusCode = 400

            throw error;
        }
        await cartService.updateCart(user_id, quantity);

        res.status(200)
    }catch (err){
        res.status(err.statusCode || 400).json({message: err.message})
    }
}

const getCartByUserId = async (req, res) => {
    try{
        const {user_id,product_id} = req.body

        if(!user_id || !product_id){
            const error = new Error('CANNOT READ INFOMATION')
            error.statusCode = 400

            throw error;
        }
        await cartService.getCartByUserId(user_id,product_id);

        res.status(200)
    }catch(err){
        res.status(err.statusCode || 400).json({message : err.message})
    }
}




module.exports = {
    createCart,
    updateCart,
    getCartByUserId
}