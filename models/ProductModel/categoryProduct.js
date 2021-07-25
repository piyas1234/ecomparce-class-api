const mongoose = require("mongoose");

// productCategorySchema
const productCategorySchema = new mongoose.Schema(
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

const productCategory = mongoose.model("productCategory", productCategorySchema);

module.exports = productCategory;
