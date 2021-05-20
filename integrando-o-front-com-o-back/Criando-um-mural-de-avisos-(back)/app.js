const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let posts = [
    {id: "djfkasbdjfbjsd", 
    title: "Teste do mural",
    descripiton: "Descrição teste"},
]; // dados ficticios



app.get("/all", (req,res)=>{

    res.json(JSON.stringify(posts));

}); // nessa rota irá retornar todos os post disponiveis

app.post("/new", (req,res)=>{});


app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: ${PORT}`)
});