import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

const app = express();
app.use(express.json())

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log("Conexão estabelecida com MongoDb");
})

routes(app);

app.post('/livros', (req, res) => {
    livros.push(req.body);
    req.status(201).send("livro cadastrado com sucesso");
})

app.put('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    livros[index].título = req.body.título;
    res.json(livros);
})

app.get('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);

})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`livro ${id} removido`);
})




function buscaLivro(id)
{
    //Para cada objeto livro dentro da lista livros, conferir se id do objeto == id passado pela função
    return livros.findIndex(livro => livro.id == id)

}

export default app