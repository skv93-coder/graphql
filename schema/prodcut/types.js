const { gql } = require("apollo-server");

const ProductTypes = `
type Product {
  id: ID
  name: String
}
extend type Query {
  product: Product
  products: [Product]
}
input ProductCreateDataInput {
   
}
input ProductUpdateDataInput {
   
}
input ProductUpdateWhereInput {
   
}
extend type Mutation {
  productCreate(data: ProductCreateDataInput!): Product
  productUpdate(data: ProductUpdateDataInput!, where: ProductUpdateWhereInput!): Product 
}
`;
module.exports = {
  ProductTypes,
};
