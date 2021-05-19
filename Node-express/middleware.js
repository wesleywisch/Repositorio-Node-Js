let express = require('express');
let app = express();


let consoleBody = (req, res, next) =>{
    console.log(req.body);
    next();
}


let hello = (req, res)=>{
    
    res.send("Hello world");

}

app.use(express.json());
app.use("/", consoleBody);
app.get("/", hello);

app.post("/", hello);


app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"));
