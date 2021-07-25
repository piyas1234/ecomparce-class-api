const { ObjectId } = require("mongodb");
const productModel = require("../../models/ProductModel");

exports.getProductsView = async (req, res) => {
  const products = await productModel.find({});
  res.send(products);
};

exports.getProductsbyCategoryView = async (req, res) => {
  const product_category = req.params.category;
  const product = await productModel.find({ product_category: product_category });
  res.send(product);
};

exports.getProductsbyBrandView = async (req, res) => {
  const product_brand = req.params.brand;
  const product = await productModel.find({ product_brand: product_brand });
  res.send(product);
};

exports.getSingleProductView = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.find({ _id: ObjectId(id) });
  res.send(product);
};

exports.DeleteSingleProductView = async (req, res) => {
  const id = req.params.id;
  const product = await productModel.deleteOne({ _id: ObjectId(id) });
  res.send(product);
};

exports.postProductView = async (req, res) => {
  const newProduct = new productModel(req.body);
  await newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "Product is added successfully!",
      });
    }
  });
};
