const { gql } = require("apollo-server");

const ProductTypes = `
type Product {
  id: ID
  name: String
  description: String
  category:[String]
    price: Int
}
extend type Query {
  product: Product
  products: [Product]
}
input inputProduct {
  name: String
  description: String
  category:[String]
  price: Int
}
extend type Mutation {

  productCreate(product:inputProduct):Product
}
`;
module.exports = {
  ProductTypes,
};
