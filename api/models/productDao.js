const dataSource = require('./dataSource')

const getAllProducts = async () => {
    try {
        const result = await dataSource.query(`SELECT * FROM products`)
        return result
    } catch {
        const error = new Error('Cannot get all-products')
        error.statusCode = 400
        throw error
    }
}

const getProductByCategoryId = async (categoryId) => {
    try {
        const result = await dataSource.query(`
            SELECT
                p.id,
                p.brand_id,
                p.name,
                p.description,
                p.thumbnail_image_url,
                p.price,
                p.discounted_price,
                p.created_at
            FROM products as p
            INNER JOIN sub_categories as s
            WHERE p.sub_category_id = s.id AND s.category_id = ?
            `, [categoryId]
        )
        return result
    } catch {
        const error = new Error('Cannot get category')
        error.statusCode = 400
        throw error
    }
}

const getProductBySubCategoryId = async (subCategoryId) => {
    try {
        const result = await dataSource.query(`
            SELECT
                *
            FROM products as p
            WHERE p.sub_category_id = ?
            `, [subCategoryId]
        )
        return result
    } catch {
        const error = new Error('Cannot get subcategory')
        error.statusCode = 400
        throw error
    }
}

const getProductById = async (productId) => {
    try {
        const result = await dataSource.query(`
            SELECT * FROM products AS p
            WHERE p.id = ?
            `, [productId]
        )
        return result
    } catch {
        const error = new Error('Cannot get product')
        error.statusCode = 400
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById
}