let express = require('express');
let app = express();
let aluno = require("./aluno")



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/all", aluno);

app.get("/", (req, res) => {
    res.send("Hello world")
})


app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

