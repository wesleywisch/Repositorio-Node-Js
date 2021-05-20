const express = require('express');
const router = express.Router();
const posts = require('../model/posts');

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