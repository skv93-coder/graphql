const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const Product = new Schema({
  name: String,
  price: Number,
  description: String,
});

const ProductModel = model("product", Product);
module.exports = { ProductModel };
