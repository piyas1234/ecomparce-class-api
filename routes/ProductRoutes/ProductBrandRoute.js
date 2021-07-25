const {
  getProductBrandView,
  getSingleProductBrandView,
  DeleteSingleProductBrandView,
  postProductBrandView,
} = require("../../view/productView/ProductBrandView");

const productBrandRoute = require("express").Router();

productBrandRoute.get("/", getProductBrandView);
productBrandRoute.get("/:id", getSingleProductBrandView);
productBrandRoute.delete("/:id", DeleteSingleProductBrandView);
productBrandRoute.post("/", postProductBrandView);

module.exports = productBrandRoute;
