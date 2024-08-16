const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  if (!posts) {
    return res.status(404).json({ message: "no posts found" });
  }

  res.status(200).json(posts);
});

const getUserPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ author: req.user.id });
  if (!posts) {
    return res.status(404).json({ message: "no posts found" });
  }

  res.status(200).json(posts);
});

const makePost = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({ message: "please enter a title and body" });
  }

  const author = req.user._id;

  const post = await Post.create({
    author,
    title,
    body,
  });

  res.status(200).json(post);
});

const editPost = asyncHandler(async (req, res) => {
  const { newBody } = req.body;
  const targetPost = await Post.findById(req.params.id);
  if (!targetPost) {
    return res.status(404).json({ message: "the post does not exist" });
  }
  if (!newBody) {
    return res.status(400).json({ message: "please enter body text" });
  }

  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,
    { body: newBody },
    { new: true }
  );
  res.status(200).json(updatedPost);
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(400).json({ message: "post does not exist" });
  }

  await post.deleteOne();
  res.json(req.params.id);
});

module.exports = {
  getPosts,
  getUserPosts,
  makePost,
  editPost,
  deletePost,
};
