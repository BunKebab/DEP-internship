const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");
const PostModel = require("../../../task2/server/models/PostModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find();
  if (!products) {
    return res.status(400).json({ message: "no products found" });
  }

  return res.status(200).json(products);
});

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, pictures } = req.body;
  if (!name || !description || !price || !pictures) {
    return res.status(400).json({ message: "please enter all credentials" });
  }

  const product = await Product.create({
    name,
    description,
    price,
    pictures,
  });
  return res.status(200).json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params.id;
  const post = await post.findById({ _id: productId });
  if (!post) {
    return res.status(400).json({ message: "product not found" });
  }

  await PostModel.deleteOne({
    _id: productId,
  });
  return res.status(200).json(productId);
});

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
};
