import express from "express";
import posts from "./model/posts.js";

const PORT = 3000;
const app = express();

// Middleware para analisar o JSON
app.use(express.json());

app.get("/all", (req, res) => {
  res.json(posts.getAll());
});

app.post("/new", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  posts.newPost(title, description);
  res.json({ message: "Post adicionado" });
});

app.post("/del", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
