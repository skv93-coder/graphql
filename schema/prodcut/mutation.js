// product/mutation.js

const { ProductModel } = require("./db");

const ProductMutation = {
  productCreate: async (parent, args) => {
    // whatever
    const product = new ProductModel({ ...args.product });
    await product.save();
    return product;
  },
};
module.exports = { ProductMutation };
