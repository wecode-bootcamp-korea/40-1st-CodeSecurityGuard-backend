const productDao = require('../models/productDao')

const getAllProducts = async () => {
    let result = await productDao.getAllProducts()
    return result
}

const getProductByCategoryId = async (categoryId) => {
    let result = await productDao.getProductByCategoryId(categoryId)
    return result
}

const getProductBySubCategoryId = async (subCategoryId) => {
    let result = await productDao.getProductBySubCategoryId(subCategoryId)
    return result
}

const getProductById = async (productId) => {
    let result = await productDao.getProductById(productId)
    return result
}

const searchProduct = async (keyword) => {
    let keywordCheck = keyword.substring(1, keyword.length-1)
    let result = await productDao.searchProduct(keywordCheck)
    return result
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}