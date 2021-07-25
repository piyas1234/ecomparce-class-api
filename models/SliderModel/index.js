const mongoose = require("mongoose");

// productSchema
const sliderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    product_type: {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
    },
  },
  { timestamps: true }
);

const sliderModel = mongoose.model("slider", sliderSchema);

module.exports = sliderModel;
