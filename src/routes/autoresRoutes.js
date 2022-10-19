import express from "express"
import autoresController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get("/autores", autoresController.listarLivros)
    .get("/autores/:id", autoresController.listarLivrosPorId)
    .post("/autores", autoresController.cadastrarLivros)
    .put("/autores", autoresController.atualizarLivro)
    .delete("/autores", autoresController.deletarLivro)
    

export default router;