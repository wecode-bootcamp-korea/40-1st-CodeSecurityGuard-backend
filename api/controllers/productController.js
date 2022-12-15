const productService = require('../services/productService')
const { catchAsync } = require('../utils/error')

const getAllProducts = catchAsync(async (req, res) => {
    let result = await productService.getAllProducts()
    res.status(200).json({ data : result })
})

const getProductByCategoryId = catchAsync(async (req, res) => {
    const categoryId = +req.params.categoryId
    let result = await productService.getProductByCategoryId(categoryId)
    res.status(200).json({ data : result })
})

const getProductBySubCategoryId = catchAsync(async (req, res) => {
    const subCategoryId = +req.params.subCategoryId
    let result = await productService.getProductBySubCategoryId(subCategoryId)
    res.status(200).json({ data : result })
})

const getProductById = catchAsync(async (req, res) => {
    const productId = +req.params.productId
    let result = await productService.getProductById(productId)
    res.status(200).json({ data : result })
})

const searchProduct = catchAsync(async (req, res) => {
    const keyword = req.query.keyword
    let result = await productService.searchProduct(keyword)
    res.status(200).json({ data : result })
})

module.exports = {
    getAllProducts,
    getProductByCategoryId,
    getProductBySubCategoryId,
    getProductById,
    searchProduct
}