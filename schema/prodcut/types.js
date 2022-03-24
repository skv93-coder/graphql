const { gql } = require("apollo-server");

const ProductTypes = `
type Product {
  id: ID
  name: String
  description: String
}
extend type Query {
  product: Product
  products: [Product]
}
input inputProduct {
  name: String
  description: String

}
extend type Mutation {

  productCreate(product:inputProduct):Product
}
`;
module.exports = {
  ProductTypes,
};
