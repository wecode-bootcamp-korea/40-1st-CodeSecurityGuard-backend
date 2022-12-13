const dataSource = require('./dataSource')

const getAllProducts = async () => {
    try {
        const result = await dataSource.query(
            `SELECT
                id,
                name,
                thumbnail_image_url AS thumbnailImageUrl,
                description,
                price,
                discounted_price AS discountedPrice,
                sub_category_id AS subCategoryId
            FROM 
                products
            `)
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
                p.name,
                p.description,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.price,
                p.discounted_price AS discountedPrice 
            FROM products AS p
            INNER JOIN sub_categories AS s
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
                id,
                name,
                thumbnail_image_url AS thumbnailImageUrl,
                description,
                price,
                discounted_price AS discountedPrice
            FROM products AS p
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
            SELECT 
                p.id,
                b.name AS brandName,
                p.name,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.description,
                p.price,
                p.discounted_price AS discountedPrice,
                p.sub_category_id AS subCategoryId
            FROM products AS p
            LEFT JOIN brands AS b ON p.brand_id = b.id
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

const searchProduct = async (keyword) => {
    try {
        const result = await dataSource.query(`
            SELECT 
                id,
                brand_id AS brandId,
                name,
                thumbnail_image_url AS thumbnailImageUrl,
                description,
                price,
                discounted_price AS discountedPrice,
                sub_category_id AS subCategoryId
            FROM products
            WHERE name LIKE '%${keyword}%'
                OR description LIKE '%${keyword}%'
            `,
        )
        return result
    } catch {
        const error = new Error('Cannot search product')
        error.statusCode = 400
        throw error
    }
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}