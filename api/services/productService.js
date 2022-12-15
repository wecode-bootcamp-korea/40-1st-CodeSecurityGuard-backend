const productDao = require('../models/productDao')

const getAllProducts = async (price) => {
    let result = await productDao.getAllProducts(price)
    return result
}

const getProductByCategoryId = async (categoryId, price) => {
    let result = await productDao.getProductByCategoryId(categoryId, price)
    return result
}

const getProductBySubCategoryId = async (subCategoryId, price) => {
    let result = await productDao.getProductBySubCategoryId(subCategoryId, price)
    return result
}

const getProductById = async (productId) => {
    let result = await productDao.getProductById(productId)
    return result
}

const searchProduct = async (keyword, price) => {
    let result = await productDao.searchProduct(keyword, price)
    return result
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}