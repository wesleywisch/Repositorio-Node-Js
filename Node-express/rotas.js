let express = require('express');
let app = express();

let alunos = [
{ id: 0, nome: "Wesley" },
{ id: 1, nome: "Maria" },
{ id: 2, nome: "Joao" },
{ id: 3, nome: "Marcos" },
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

app.get("/aluno", (req, res) => {
    console.log(req.body)
    console.log(req.query)
    let aluno = alunos[req.query.id]
    res.json(aluno)
});

// app.get("/aluno/:id", (req, res) => {
//     console.log(req.params.id)
//     let aluno = alunos[req.params.id]
//     res.json(aluno);
// });



app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
