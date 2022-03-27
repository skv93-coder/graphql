const { gql } = require("apollo-server-express");
const {
  ProductTypes,
  ProductQuery,
  ProductMutation,
  ProductResolvers,
} = require("./prodcut");
const {
  UserModel,
  UserQuery,
  UserTypes,
  UserResolvers,
  UserMutation,
} = require("./user");

const typeDefs = gql`
  type Product
  type Query
  type Mutation
  type User
  ${ProductTypes}
  ${UserTypes}
`;

const resolvers = {
  Query: { ...ProductQuery, ...UserQuery },
  Mutation: { ...ProductMutation, ...UserMutation },
  // Product: ProductResolvers,
};

module.exports = { resolvers, typeDefs };
