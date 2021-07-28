const { ObjectId } = require("mongodb");
const productModel = require("../../models/ProductModel");
const productCategory = require("../../models/ProductModel/categoryProduct");
 


exports.GetSearchProductsView = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const search = req.params.input
  try {
    
    const products = await productModel
      .find({ name: { $regex: search } })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await productModel.countDocuments();
    await res.send({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
   await res.send(err);
  }
};








exports.getProductsView = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await productModel
      .find({})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await productModel.countDocuments();
   await  res.send({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
   await res.send(err);
  }
};



exports.getProductsbyCategoryView = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const product_category = req.params.category;
    const products = await productModel
      .find({
        product_category: product_category,
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await productModel.countDocuments();
     await res.send({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (err) {
    await res.send(err);
  }
};



 


exports.getProductsbyBrandView = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try{
  const product_brand = req.params.brand;
  const products = await productModel.find({ product_brand: product_brand })
  .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

      const count = await productModel.countDocuments();   
      await res.json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
  }

  catch(err){
    await res.send(err)
  }
};

exports.getSingleProductView = async (req, res) => {
   try{
    const id = req.params.id;
    const product = await productModel.find({ _id: ObjectId(id) });
    await res.send(product);
   }
   catch(err){
    await res.send(err);
   }
};

exports.DeleteSingleProductView = async (req, res) => {
  try{
    const id = req.params.id;
    const product = await productModel.deleteOne({ _id: ObjectId(id) });
    await res.send(product);
  }
  catch(err){
    await res.send(err)
  }
};


exports.UpdateSingleProductView = async (req, res) => {
  try{
    const id = req.params.id;
    const product = await productModel.updateOne({ _id: ObjectId(id) },req.body );
    await res.send(product);
  }
  catch(err){
    await res.send(err)
  }
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
