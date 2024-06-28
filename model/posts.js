let posts = {
  posts: [
    { id: "nananam", title: "Teste do mural", description: "Descricao teste" },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },

  deletePost(id) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
      return true;
    }
    return false;
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}

export default posts;
