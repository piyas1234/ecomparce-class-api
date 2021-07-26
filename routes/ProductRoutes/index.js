const { getProductsView, getSingleProductView, DeleteSingleProductView, postProductView, getProductsbyBrandView, getProductsbyCategoryView, UpdateSingleProductView } = require('../../view/productView')
const ProductRoute = require('express').Router()
 

ProductRoute.get("/", getProductsView)
ProductRoute.get("/search/:input", getProductsView)
ProductRoute.get("/category/:category", getProductsbyCategoryView)
ProductRoute.get("/brand/:brand", getProductsbyBrandView)
ProductRoute.get("/:id", getSingleProductView)
ProductRoute.delete("/:id", DeleteSingleProductView)
ProductRoute.put("/:id", UpdateSingleProductView)
ProductRoute.post("/", postProductView)

module.exports = ProductRoute;