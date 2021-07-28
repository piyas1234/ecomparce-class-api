const { ObjectId } = require("mongodb");
 
const sliderModel = require("../../models/SliderModel");

exports.getSlidersView = async (req, res) => {
  try {
    const products = await sliderModel.find({});

    await res.send({
      products,
    });
  } catch (err) {
    await res.send(err);
  }
};

exports.getSingleSliderView = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await sliderModel.find({ _id: ObjectId(id) });
    await res.send(product);
  } catch (err) {
    await res.send(err);
  }
};

exports.DeleteSingleSliderView = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await sliderModel.deleteOne({ _id: ObjectId(id) });
    await res.send(product);
  } catch (err) {
    await res.send(err);
  }
};

exports.postSliderView = async (req, res) => {
  const newProduct = new sliderModel(req.body);
  await newProduct.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Product is added successfully!",
      });
    }
  });
};
