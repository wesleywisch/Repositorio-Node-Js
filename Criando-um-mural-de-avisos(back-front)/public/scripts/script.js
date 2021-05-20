
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
});

function updatePosts() {

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json();
    }).then(json => {
        console.log(json)
        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach((post)=>{
            let postElement = `
            <div class="card mb-4" id=${post.id}>
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>

                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`
            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    });

};

function newPost() {

};

