const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const Product = new Schema({
  name: String,
  price: Number,
  discount: { type: Number, default: 0 },
  description: String,
  images: [String],
  category: [String],
});

const ProductModel = model("product", Product);
module.exports = { ProductModel };
