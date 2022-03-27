const { UserModel } = require("./db.js");
const { UserTypes } = require("./types.js");
const { UserQuery } = require("./query.js");
const { UserMutation } = require("./mutaion");
const { UserResolvers } = require("./resolvers.js");

module.exports = {
  UserModel,
  UserQuery,
  UserTypes,
  UserResolvers,
  UserMutation,
};
