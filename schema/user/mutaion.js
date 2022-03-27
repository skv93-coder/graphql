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
      { expiresIn: "1y" }
    );
    const refreshToken = jsonwebtoken.sign(
      { id: user.id },
      "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
      { expiresIn: "180d" }
    );
    res.setHeader("Set-Cookie", [
      `refreshToken=${refreshToken}; HttpOnly;SameSite=None; Secure`,
    ]);
    console.log("res.cookies");
    return { ...args.user, token };
  },
};
module.exports = { UserMutation };
