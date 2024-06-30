import express from "express";
import posts from "../model/posts.js";

const router = express.Router();

router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  posts.newPost(title, description);
  res.json({ message: "Post adicionado" });
});

router.post("/del", (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  const deleted = posts.deletePost(id);
  if (deleted) {
    res.json({ message: "Post deletado" });
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

export default router;
