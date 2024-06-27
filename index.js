const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");
const posts = require("./model/posts");

const app = express();

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send("Post adicionado");
});

app.post("/del", bodyParser.json(), (req, res) => {
  let id = req.body.id;

  posts.deletePost(id);

  res.send("Post deletado");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
