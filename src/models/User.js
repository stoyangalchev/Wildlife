const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required!"],
    minLength: 3,
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required!"],
    minLength: 3,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    minLength: 8,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: 4,
  },
  myposts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatures",
    },
  ],
});

userSchema.pre("save", function (next) {
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;

    return next();
  });
});

userSchema.method("validatePassword", function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
