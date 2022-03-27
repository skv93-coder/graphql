const { UserModel } = require("./db");

const UserQuery = {
  me: async () => {
    return await UserModel.find({});
  },
};

module.exports = { UserQuery };
