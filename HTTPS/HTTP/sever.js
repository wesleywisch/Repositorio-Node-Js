const http = require('http');


http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'text/html' }); // text/plain é texto puro, e text/html é html mesmo, e application/Json ele entende o Json. e tbm da para colocar o charset=utf-8
    response.end(JSON.stringify({texto:"<h1>Hello Wold</h1>"}));

}).listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Servidor rodando na porta 3000")
    }
});