import express from "express";
import db from "./config/db.js";
import livros from "./models/Livro.js";


db.on("error", console.log.bind(console, "erro de conexão com banco de dados"))
db.once("open", () => {
  console.log("conexão feita com sucesso")
})
const app = express();

app.use(express.json());

// const livros = [
//   {id: 1, "titulo": "Senhor dos Aneis"},
//   {id: 2, "titulo": "O Hobbit"}
// ]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
  })

app.get('/livros', (req, res) => {
  livros.find((err, livros) => {

    res.status(200).json(livros)
  })
})

app.post((req, res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado com sucesso')
})


app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
  })
  
function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app