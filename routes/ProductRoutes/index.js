const { getProductsView, getSingleProductView, DeleteSingleProductView, postProductView, getProductsbyBrandView, getProductsbyCategoryView } = require('../../view/productView')
const ProductRoute = require('express').Router()
 

ProductRoute.get("/", getProductsView)
ProductRoute.get("/category/:category", getProductsbyCategoryView)
ProductRoute.get("/brand/:brand", getProductsbyBrandView)
ProductRoute.get("/:id", getSingleProductView)
ProductRoute.delete("/:id", DeleteSingleProductView)
ProductRoute.post("/", postProductView)

module.exports = ProductRoute;