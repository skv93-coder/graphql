const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("../db");

const tokenCreator = (user, res) => {
  console.log(
    " Token is created:>> ",
    "Token is created"
    // JSON.(user)
    // res
  );
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
  res.cookie("refreshToken", refreshToken, [
    { HttpOnly: "SameSite=None; Secure" },
  ]);
  return token;
};

const createUserAndPassword = (user) => {
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    const user = await UserModel.create(user);
    return user;
}
module.exports = { tokenCreator ,createUserAndPassword};
