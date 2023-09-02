const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide the name"],
    },
    email: {
      type: String,
      required: [true, "Please provide the email"],
      unique: [true, "Email address allready exists"],
    },
    password: {
      type: String,
      required: [true, "Please provide the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
