const { gql } = require("apollo-server-express");
const {
  ProductTypes,
  ProductQuery,
  ProductMutation,
  ProductResolvers,
} = require("./prodcut");

const typeDefs = gql`
  type Product
  type Query
  type Mutation
  ${ProductTypes}
`;

const resolvers = {
  Query: { ...ProductQuery },
  Mutation: { ...ProductMutation },
  // Product: ProductResolvers,
};

module.exports = { resolvers, typeDefs };
