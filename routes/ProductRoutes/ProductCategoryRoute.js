const { getProductCategoryView, getSingleProductCategoryView, DeleteSingleProductCategoryView, postProductCategoryView } = require('../../view/productView/ProductCategoryView')

 
const productCategoryRoute = require('express').Router()
 

productCategoryRoute.get("/", getProductCategoryView)
productCategoryRoute.get("/:id", getSingleProductCategoryView)
productCategoryRoute.delete("/:id", DeleteSingleProductCategoryView)
productCategoryRoute.post("/", postProductCategoryView)

module.exports = productCategoryRoute;