const { randomUUID } = require("crypto");

const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("./db");
const { tokenCreator, createUserAndPassword } = require("./resolvers");

const UserMutation = {
  userCreate: async (parent, args, { res }) => {
    const _id = randomUUID();
    return {
      user: () => createUserAndPassword(args.user),
      token: () => tokenCreator(_id, res),
    };
  },
  login: async (parent, args, { res }) => {
    const {
      user: { email, password },
    } = args;
    console.log("email", args);
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new AuthenticationError("This user does not exist.");
    }
    const isAuthenticated = await bcrypt.compare(password, user.password);
    if (!isAuthenticated) {
      throw new AuthenticationError("This user does not exist.");
    }
    const token = jsonwebtoken.sign(
      { id: user.id },
      "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
      { expiresIn: "180d" }
    );
    const refreshToken = jsonwebtoken.sign(
      { id: user.id },
      "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
      { expiresIn: "1y" }
    );
    res.setHeader("Set-Cookie", [
      `refreshToken=${refreshToken}; HttpOnly;SameSite=None; Secure`,
    ]);

    return { user: args.user, token };
  },
};
module.exports = { UserMutation };
