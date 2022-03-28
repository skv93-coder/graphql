const mongoose = require("mongoose");
// The ApolloServer constructor requires two parameters: your schema

const { ApolloServer } = require("apollo-server");

const { typeDefs, resolvers } = require("./schema");
const cokieparsers = require("./service/parseCokie");
const { UserModel } = require("./schema/user/db");
const jsonwebtoken = require("jsonwebtoken");

mongoose.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: { credentials: true, origin: "https://studio.apollographql.com" },
  context: async ({ req, res }) => {
    console.log("200", 200);
    const token = req.headers["authorization"];
    res["Access-Control-Allow-Origin"] = "https://studio.apollographql.com";
    res["Access-Control-Allow-Credentials"] = true;

    if (token) {
      try {
        const decoded = jsonwebtoken.verify(
          token,
          "d6gv3476d7wg7gd87278g378d3g238gs7283d73g"
        );

        if (decoded) {
          const user = await UserModel.findOne({
            _id: refreshTokenPayload.id,
          });
          req.user = user;
          let refreshToken = req.headers.cookie.split("=");
          if (refreshToken.length === 2) {
            refreshToken = refreshToken[1];
            const refreshTokenPayload = jsonwebtoken.verify(
              refreshToken,
              "d6gv3476d7wg7gd87278g378d3g238gs7283d73g"
            );

            const legRoom = new Date().setDate(new Date().getDate() + 3);
            if (legRoom > new Date(refreshTokenPayload.exp * 1000)) {
              const newRefreshToken = jsonwebtoken.sign(
                { id: user.id },
                "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
                { expiresIn: "1y" }
              );
              res.setHeader("Set-Cookie", [
                `refreshToken=${newRefreshToken}; HttpOnly;SameSite=None; Secure`,
              ]);
            }
          }
        }
      } catch (error) {}
    }
    return { req, res };
  },
});

// The `listen` method launches a web server.
server.listen(400).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
