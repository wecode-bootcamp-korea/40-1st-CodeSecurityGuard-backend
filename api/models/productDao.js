const dataSource = require('./dataSource')

const sortSet = {
    DEFAULT :'ORDER BY p.id',
    ASC: 'ORDER BY p.price ASC',
    DESC: 'ORDER BY p.price DESC'
}
const getAllProducts = async (price) => {
    try {

        if(!price){price='DEFAULT'}

        const result = await dataSource.query(
            `SELECT
                p.id,
                p.name,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.description,
                p.price,
                p.discounted_price AS discountedPrice,
                p.sub_category_id AS subCategoryId
            FROM 
                products p
            
                ${sortSet[price]}
            `)
        return result
    } catch {
        throw new Error('getAllProductsErr')
    }
}

const getProductByCategoryId = async (categoryId, price) => {    
    try {

        if(!price){price='DEFAULT'}
        
        const result = await dataSource.query(`
            SELECT
                p.id,
                p.name,
                p.description,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.price,
                p.discounted_price AS discountedPrice 
            FROM products AS p
            INNER JOIN sub_categories AS s ON s.id = p.sub_category_id
            WHERE s.category_id = ?
            ${sortSet[price]}
            `,[categoryId])
            
        return result
    } catch {
        throw new Error('getProductByCategoryIdErr')
    }
}

const getProductBySubCategoryId = async (subCategoryId, price) => {
    try {

        if(!price){price='DEFAULT'}

        const result = await dataSource.query(`
            SELECT
                p.id,
                p.name,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.description,
                p.price,
                p.discounted_price AS discountedPrice
            FROM products AS p
            WHERE p.sub_category_id = ${subCategoryId}
            ${sortSet[price]}
            `,
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

const searchProduct = async (keyword,price) => {
    try {

        if(!price){price='DEFAULT'}

        const result = await dataSource.query(`
            SELECT 
                p.id,
                p.brand_id AS brandId,
                p.name,
                p.thumbnail_image_url AS thumbnailImageUrl,
                p.description,
                p.price,
                p.discounted_price AS discountedPrice,
                p.sub_category_id AS subCategoryId
            FROM products p
            WHERE name LIKE '%${keyword}%'
            OR description LIKE '%${keyword}%'
            ${sortSet[price]}
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