// product/query.js
const { ProductModel } = require("./db");

const ProductQuery = {
  // product: (parent, args) => {
  //   return ProductModel.find({});
  // },
  products: async (parent, args) => {
    return ProductModel.find({});
  },
};
module.exports = { ProductQuery };
