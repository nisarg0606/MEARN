const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  discountedPrice: {
    type: Number,
    required: true,
    trim: true,
    minlength: 1,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;