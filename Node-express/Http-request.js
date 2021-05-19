let express = require('express');
let app = express();


app.get("/", (req, res)=>{
    console.log(req);
    res.json({name: "wesley"});
});


app.listen(5000, ()=> console.log("Servidor rodando na porta 5000"));
