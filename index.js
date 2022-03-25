const mongoose = require("mongoose");
// The ApolloServer constructor requires two parameters: your schema

const { ApolloServer } = require("apollo-server");

const { typeDefs, resolvers } = require("./schema");

mongoose.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(400).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
