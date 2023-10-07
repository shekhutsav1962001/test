var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema({
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

userSchema.methods.isValid = function (hashedpassword) {
  return bcrypt.compareSync(hashedpassword, this.password);
};

module.exports = mongoose.model("user", userSchema);
