const { tokenCreator, createUserAndPassword } = require("./controllers");

module.exports = {
  userCreateResponse: {
    token: tokenCreator,
  },
};
