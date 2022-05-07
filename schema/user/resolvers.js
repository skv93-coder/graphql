const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("./db");

const tokenCreator = (_id, res) => {
  const token = jsonwebtoken.sign(
    { id: _id },
    "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
    { expiresIn: "180d" }
  );
  const refreshToken = jsonwebtoken.sign(
    { id: _id },
    "d6gv3476d7wg7gd87278g378d3g238gs7283d73g",
    { expiresIn: "1y" }
  );
  res.cookie("refreshToken", refreshToken, [
    { HttpOnly: "SameSite=None; Secure" },
  ]);
  return token;
};

const createUserAndPassword = async (user) => {
  const hashPassword = await bcrypt.hash(user.password, 10);
  user.password = hashPassword;
  const createdUser = await UserModel.create(user);
  return createdUser;
};
module.exports = { tokenCreator, createUserAndPassword };
