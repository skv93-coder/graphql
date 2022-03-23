const { typeDefs, resolvers } = require("./schema");
// The ApolloServer constructor requires two parameters: your schema

const { ApolloServer } = require("apollo-server");

// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(400).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
