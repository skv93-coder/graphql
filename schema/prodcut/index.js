// product/index.js
const { ProductModel } = require("./db.js");
const { ProductTypes } = require("./types.js");
const { ProductQuery } = require("./query.js");
const { ProductMutation } = require("./mutation.js");
const { ProductResolvers } = require("./resolvers.js");

module.exports = {
  ProductModel,
  ProductQuery,
  ProductTypes,
  ProductResolvers,
  ProductMutation,
};
