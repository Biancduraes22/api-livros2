const express = require("express");
const app = express();

app.use(express.json());

let livros = [
  { id: 1, titulo: "Diário de um Banana", autor: "Jeff Kinney", genero: "Comédia" },
  { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", genero: "Fábula" },
  { id: 3, titulo: "Frozen", autor: "Disney", genero: "Infantil" },
  { id: 4, titulo: "A Bailarina Fantasma", autor: "Socorro Acioli", genero: "Mistério" },
  { id: 5, titulo: "O Que Aconteceu com Annie", autor: "C. J. Tudor", genero: "Suspense" },
];

app.get("/", (req, res) => {
  res.json({ mensagem: "API de livros funcionando com sucesso!" });
});

app.get("/api/livros", (req, res) => {
  res.json(livros);
});

app.get("/api/livros/:id", (req, res) => {
  const id = Number(req.params.id);
  const livro = livros.find(l => l.id === id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  res.json(livro);
});

app.post("/api/livros", (req, res) => {
  const { titulo, autor, genero } = req.body;

  if (!titulo || !autor || !genero) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios: titulo, autor e genero"
    });
  }

  if (
    typeof titulo !== "string" ||
    typeof autor !== "string" ||
    typeof genero !== "string"
  ) {
    return res.status(400).json({
      erro: "Os campos titulo, autor e genero devem ser texto"
    });
  }

  if (
    titulo.trim() === "" ||
    autor.trim() === "" ||
    genero.trim() === ""
  ) {
    return res.status(400).json({
      erro: "Os campos não podem estar vazios"
    });
  }

  const novoLivro = {
    id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
    titulo: titulo.trim(),
    autor: autor.trim(),
    genero: genero.trim()
  };

  livros.push(novoLivro);

  res.status(201).json({
    mensagem: "Livro cadastrado com sucesso",
    livro: novoLivro
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});