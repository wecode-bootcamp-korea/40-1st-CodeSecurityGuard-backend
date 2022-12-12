const dataSource = require('./dataSource')

const createCart = async (user_id, product_id, quantity, status_id) => {
    try {
        const result = await dataSource.query(`
              INSERT INTO carts (
                user_id,
                product_id,
                quantity,
                status_id 
              ) VALUES (
                ?,
                ?,
                ?,
                1
              )`,
              [user_id, product_id, quantity, status_id]
        )

        return result.insertId
    } catch{
        const error = new Error('cannot create cart')
        error.statusCode = 400
        throw error
    }
}

const updateCart = async (quantity,user_id) =>{
  try {
    const result = await dataSource.query(`
           UPDATE carts
           SET quantity =?
           WHERE user_id =?`,
           [quantity, user_id]
      )

      return result.insertId
  } catch{
    const error = new Error('cannot update quantity')
    error.statusCode = 400
    throw error
  }
}
const getCartByUserId = async(user_id) => {
    const result = await dataSource.query(`
           SELECT 
            c.user_id,
            c.product_id,
            c,quantity,
            c.status_id,
            p.thumbnail_image_url,
            p.price,
            p.name
           FROM carts c
           INNER JOIN products p ON p.id = c.product_id
           WHERE user_id = ?`, [user_id]
    )
    return result[0] 
}

const deleteCartByCartId = async(cart_id) => {
    const result = (await dataSource.query(`
            DELETE FROM carts
            WHERE id = ?`, [cart_id]
        )).affectedRows

        if (deletedRows !== 0 && deletedRows !== 1) 
        throw new Error ('UNEXPECTED_NUMBER_OF_RECORD_DELETED')
}

module.exports ={
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}