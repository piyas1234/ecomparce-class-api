const mongoose = require("mongoose");

// productSchema
const productBrandSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productBrand = mongoose.model("productBrand", productBrandSchema);

module.exports = productBrand;
