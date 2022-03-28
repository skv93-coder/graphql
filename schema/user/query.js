const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const { UserModel } = require("./db");

const UserQuery = {
  me: async (_, __, context) => {
    return context.user;
  },
  token: async (_, __, { req, res }) => {
    let refreshToken = req.headers.cookie.split("=");

    refreshToken = refreshToken[1];
    const refreshTokenPayload = jsonwebtoken.verify(
      refreshToken,
      "d6gv3476d7wg7gd87278g378d3g238gs7283d73g"
    );
    const user = await UserModel.findOne({ _id: refreshTokenPayload.id });
    if (user) {
      const newRefreshToken = jsonwebtoken.sign(
        { id: user.id },
        "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
        { expiresIn: "1y" }
      );
      res.setHeader("Set-Cookie", [
        `refreshToken=${newRefreshToken}; HttpOnly;SameSite=None; Secure`,
      ]);
      const token = jsonwebtoken.sign(
        { id: user.id },
        "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
        { expiresIn: "1180dy" }
      );

      return token;
    }
    throw new AuthenticationError("Please login again to continue");
  },
};

module.exports = { UserQuery };
