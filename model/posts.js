module.exports = {
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
    // Encontra o índice do post com o id correspondente
    const index = this.posts.findIndex((post) => post.id === id);
    // Verifica se o post foi encontrado
    if (index !== -1) {
      // Remove o post da lista
      this.posts.splice(index, 1);
      return true; // Indica que o post foi removido com sucesso
    }
    return false; // Indica que o post não foi encontrado
  },
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
