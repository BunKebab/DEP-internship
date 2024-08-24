const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");
const PostModel = require("../../../task2/server/models/PostModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  if (!products) {
    return res.status(400).json({ message: "no products found" });
  }

  return res.status(200).json(products);
});

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, images } = req.body;
  if (!name || !description || !price || !images) {
    return res.status(400).json({ message: "please enter all credentials" });
  }

  const product = await Product.create({
    name,
    description,
    price,
    images,
  });
  return res.status(200).json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) {
    return res.status(400).json({ message: "product not found" });
  }

  await Product.deleteOne({
    _id: productId,
  });
  return res.status(200).json(productId);
});

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
};
