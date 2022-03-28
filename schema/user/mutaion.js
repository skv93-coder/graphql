const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("./db");

const UserMutation = {
  userCreate: async (parent, args, { res }) => {
    console.log("args :>> ", args, parent);
    const hashPassword = await bcrypt.hash(args.user.password, 10);
    args.user.password = hashPassword;
    const user = await UserModel.create(args.user);

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

    return { ...args.user, token };
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

    return { ...args.user, token };
  },
};
module.exports = { UserMutation };
