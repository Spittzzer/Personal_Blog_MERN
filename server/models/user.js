const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },

    profilePic: {
      type: String,
      default: "https://i.imgur.com/Xq2QYjh.png",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
