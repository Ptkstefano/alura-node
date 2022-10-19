import express from "express"
import livroController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivrosPorEditora)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivros)
    .put("/livros", livroController.atualizarLivro)
    .delete("/livros", livroController.deletarLivro)
    

export default router;