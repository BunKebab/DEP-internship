const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const { protect, adminOnly } = require("../middleware/AuthMiddleware");

router.get("/", getProducts);
router.post("/add", adminOnly, protect, addProduct);
router.delete("/:id/delete", adminOnly, protect, deleteProduct);

module.exports = router;
