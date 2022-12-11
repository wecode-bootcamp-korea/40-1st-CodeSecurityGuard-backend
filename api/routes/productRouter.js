const express = require('express');
const productController = require('../controllers/productController');
const {loginRequired} = require('../utils/auth')

const router = express.Router();

router.get('/all', productController.getAllProducts)
router.get('/category/:categoryId', productController.getProductByCategoryId)
router.get('/subCategory/:subCategoryId', productController.getProductBySubCategoryId)
router.get('/:productId', loginRequired, productController.getProductById)

module.exports = {
    router
}
