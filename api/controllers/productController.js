const productService = require('../services/productService')

const getAllProducts = async (req, res) => {
    try {
        let result = await productService.getAllProducts()
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const getProductByCategoryId = async (req, res) => {
    try {
        const categoryId = +req.params.categoryId
        let result = await productService.getProductByCategoryId(categoryId)
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const getProductBySubCategoryId = async (req, res) => {
    try {
        const subCategoryId = +req.params.subCategoryId
        let result = await productService.getProductBySubCategoryId(subCategoryId)
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = +req.params.productId
        let result = await productService.getProductById(productId)
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

const searchProduct = async (req, res) => {
    try {
        const keyword = req.query.keyword
        let result = await productService.searchProduct(keyword)
        res.status(200).json({ data : result })
    } catch (err) {
        res.status(err.statusCode || 400).json({ message : err.message })
    }
}

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}