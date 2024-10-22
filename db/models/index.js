const { User, UserSchema } = require('./user.model');

function setupModels(sequilize) {
  User.init(UserSchema, User.config(sequilize));
}

module.exports = setupModels;
