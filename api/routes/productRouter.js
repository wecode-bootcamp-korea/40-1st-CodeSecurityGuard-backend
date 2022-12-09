const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/all', productController.getAllProducts)
router.get('/category/:categoryId', productController.getProductByCategoryId)
router.get('/subCategory/:subCategoryId', productController.getProductBySubCategoryId)
router.get('/:productId', productController.getProductById)

module.exports = {
    router
}
