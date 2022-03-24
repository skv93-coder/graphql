// product/resolvers.js
const { ProductModel } = require("./db");
const ProductResolvers = {
  // here we only write a resolver for reviews and apollo server will create a default
  // resolver for other fields.
  product: async (parent, args) => {
    // whatever
    return await ProductModel.find({});
  },
  products: async (parent, args) => {
    // whatever
    return await ProductModel.find({});
  },
};
module.exports = { ProductResolvers };
