import mongoose from "mongoose";
import autores from "./Autor";

const livroSchema = new mongoose.Schema(
    {
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        paginas: {type: Number}
    }
);

const livros = mongoose.model('livrarias', livroSchema);

export default livros;