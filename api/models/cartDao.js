const { TransactionAlreadyStartedError } = require('typeorm')
const dataSource = require('./dataSource')
const queryRunner = dataSource.createQueryRunner()


const createCart = async ( productId, userId, quantity) => {
    try {
      const result = await dataSource.query(`
          INSERT INTO carts (
            user_id,
            product_id,
            quantity,
            status_id
            ) 
          VALUES (
            ?,
            ?,
            ?,
            1
            )`,
          [ userId, productId, quantity ]
          )

        return result.insertId
    } catch {
      throw new Error('createCartErr')
    }
}

const updateCart = async (quantity, productId, userId) =>{
    await queryRunner.connect()
    await queryRunner.startTransaction()
  try{
    const updateRows = (await queryRunner.query(`
        UPDATE carts
        SET quantity =?
            product_id = ?
        WHERE user_id =?`,
            [quantity ,userId, productId]
      )).affectedRows

      if (updateRows !== 1) {
      throw new Error('updatedRowsErr')
      }
    
    const result = await queryRunner.query(`
          SELECT
          c.user_id,
          c.product_id,
          c.quantity,
          c.status_id,
          p.thumbnail_image_url,
          p.price,
          p.name,
          u.point
        FROM carts c
        INNER JOIN products p ON p.id = c.product_id
        INNER JOIN users u ON u.id= c.user_id
        WHERE user_id = ?`, [userId]
        )
      await queryRunner.commitTransaction();
        return result[0]
    }catch (err){
        await transaction.rollbackTransaction();
    }finally{
        await transaction.release();
    }
}
    
const getCartByUserId = async(userId) => {
    const result = await dataSource.query(`
        SELECT 
          c.id,
          c.user_id as UserId,
          c.product_id as productId,
          c.quantity,
          c.status_id as statusId,
          p.thumbnail_image_url as thumbnailImageUrl,
          p.price,
          p.name,
          u.point
        FROM carts c
        INNER JOIN products p ON p.id = c.product_id
        INNER JOIN users u ON u.id= c.user_id
        WHERE user_id = ?`, [userId]
    )
    return result 
}

const deleteCartByCartId = async(cartId, userId) => {
    try{
      const deletedRows = (await dataSource.query(`
            DELETE FROM carts
            WHERE id = ? AND WHERE user_id = ?`, [cartId, userId]
        )).affectedRows

        if (deletedRows !== 0 && deletedRows !== 1) 
        throw new Error ('deletedCartRowsErr')
    } catch {
      throw new Error('deleteCartByCartIdErr')
    }
}

module.exports ={
    createCart,
    updateCart,
    getCartByUserId,
    deleteCartByCartId
}