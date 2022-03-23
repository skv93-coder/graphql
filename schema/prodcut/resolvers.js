// product/resolvers.js
const ProductResolvers = {
  // here we only write a resolver for reviews and apollo server will create a default
  // resolver for other fields.
  product: (parent, args) => {
    // whatever
  },
  products: (parent, args) => {
    // whatever
  },
};
module.exports = { ProductResolvers };
