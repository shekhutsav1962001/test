const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: false,
  },
});

userSchema.statics.hashPassword = function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.isValid = function (userEnteredPassword) {
  return bcrypt.compareSync(userEnteredPassword, this.password);
};

module.exports = mongoose.model("user", userSchema);
