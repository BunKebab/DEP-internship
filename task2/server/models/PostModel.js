const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = mongoose.Schema(
  {
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
