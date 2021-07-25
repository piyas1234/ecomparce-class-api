const mongoose = require("mongoose");

// productSchema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    product_category: {
      type: String,
      required: true,
    },

    product_brand: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    real_price: {
      type: String,
      required: true,
    },

    discount_price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;



