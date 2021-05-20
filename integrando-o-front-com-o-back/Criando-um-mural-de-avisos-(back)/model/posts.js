module.exports = {
    posts: [
        {
            id: "djfkasbdjfbjsd",
            title: "Teste do mural",
            descripiton: "Descrição teste"
        },
    ], // dados ficticios

    getAll(){
        return this.posts;
    },

    newPost(title, descripiton){

        this.posts.push({ id: generateID(), title, descripiton});

    },

    // deletePost(id){
    //     // implementar essa funcção futuramente
    // }


}


function generateID(){
    return Math.random().toString(36).substring(2, 9);
}