const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    Ref: "User",
    required: true,
  },
  products: [
    {
      type: ObjectId,
      Ref: "Product",
      required: true,
    },
  ],
  total: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
