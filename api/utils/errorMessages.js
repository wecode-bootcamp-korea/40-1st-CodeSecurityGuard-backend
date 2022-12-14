module.exports = {
    //* GLOBAL
        keyErr : {
            statusCode : 400,
            message : "KEY_ERROR"
        },
        
    //* PRODUCTS 
        getAllProductsErr : {
            statusCode : 404,
            message : "CANNOT_FIND_ALL_PRODUCTS"
        },

        getProductByCategoryIdErr : {
            statusCode : 404,
            message : "CANNOT_FIND_CATEGORY"
        },

        getProductBySubCategoryIdErr : {
            statusCode : 404,
            message : "CANNOT_FIND_SUB_CATEGORY"
        },

        getProductByIdErr : {
            statusCode : 404,
            message : "CANNOT_FIND_PRODUCT"
        },

        searchProductErr : {
            statusCode : 404,
            message : "CANNOT_SEARCH"
        },
    

    //* USERS
        emailRegexErr : {
            statusCode : 400,
            message : "INVALID_EMAIL"
        },

        passwordRegexErr : {
            statusCode : 400,
            message : "INVALID_PASSWORD"
        },

        passwordMatchErr : {
            statusCode : 400,
            message : "WRONG_PASSWORD"
        },

        createUserErr : {
            statusCode : 400,
            message : "CANNOT_CREATE_USER"
        },

    //* CARTS
        updatedRowsErr : {
            statusCode : 400,
            message : 'UNEXPECTED_NUMBER_UPDATED'
        },

        createCartErr : {
            statusCode : 400,
            message : "CANNOT_CREATE_CART"
        },

        deletedCartRowsErr : {
            statusCode : 400,
            message : "UNEXPECTED_NUMBER_OF_RECORD_DELETED"
        },

        deleteCartByCartIdErr : {
            statusCode : 400,
            message : "CANNOT_DELETE_CART"
        },

    //* ORDERS
        insufficientPointsErr : {
            statusCode : 400,
            message : 'INSUFFICIENT_POINTS'
        },

        addOrderErr : {
            statusCode : 400,
            message : "INVALID_TRANSACTION"
        },

}