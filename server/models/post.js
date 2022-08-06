const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    content: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "https://i.imgur.com/Xq2QYjh.png",
    },

    username: {
      type: String,

      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
