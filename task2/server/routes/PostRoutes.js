const express = require("express");
const router = express.Router();

const {
  getPosts,
  getUserPosts,
  makePost,
  editPost,
  deletePost,
} = require("../controllers/PostController");
const { protect } = require("../middleware/AuthMiddleware");

router.get("/", getPosts);
router.get("/posts", protect, getUserPosts);
router.post("/", protect, makePost);
router.put("/edit-post/:id", protect, editPost);
router.delete("/delete-post/:id", protect, deletePost);

module.exports = router;
