const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const cors = require('cors');
const options = {
    origin: "http://localhost:3000" // por segurança se la no meu script estiver localhost aqui passarei outro no caso o ipv4, se la no script estiver o ipv4 aqui passarei o locahost.

    // por segurança irrei deixar os 2 com localhost, mais eu sei que é necessario mudar.
}


router.use(cors(options));

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.get("/all", (req,res)=>{

    res.json(JSON.stringify(posts.getAll()));

}); // nessa rota irá retornar todos os post disponiveis

router.post("/new", express.json(), (req,res)=>{
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);


    res.send("Post adicionado");

});

module.exports = router