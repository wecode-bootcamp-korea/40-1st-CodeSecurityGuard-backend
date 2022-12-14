const dataSource = require('./dataSource')

const getAllProducts = async () => {
    try {
        const result = await dataSource.query(
            `SELECT
                idd,
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
        throw new Error('getAllProductsErr')
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
        console.log(result)
        return result
    } catch {
        throw new Error('getProductByCategoryIdErr')
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
        throw new Error('getProductBySubCategoryIdErr')
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
        throw new Error('getProductByIdErr')
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
        throw new Error('searchProductErr')
    }
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}