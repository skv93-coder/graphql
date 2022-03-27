const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  mobile: Number,
});

module.exports = { UserModel: model("User", UserSchema) };
