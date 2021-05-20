module.exports = {
    posts: [
        {
            id: "djfkasbdjfbjsd",
            title: "Teste do mural",
            description: "Descrição teste"
        },
    ], // dados ficticios

    getAll(){
        return this.posts;
    },

    newPost(title, description){

        this.posts.push({ id: generateID(), title, description});

    },

    // deletePost(id){
    //     // implementar essa funcção futuramente
    // }


}


function generateID(){
    return Math.random().toString(36).substring(2, 9);
}