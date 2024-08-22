const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const { protect, adminOnly } = require("../middleware/AuthMiddleware");

router.get("/products", getProducts);
router.post("/products/add", adminOnly, protect, addProduct);
router.delete("/products/:id/delete", adminOnly, protect, deleteProduct);

module.exports = router;
