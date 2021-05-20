const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const apiRouter = require('./routes/api')


// para garantir que uma chamada a api não busque por uma pasta chamada api, devemos inverter a chamada das rotas.
app.use('/api', apiRouter);
app.use('/', express.static(path.join(__dirname, "public")));





app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: ${PORT}`)
});