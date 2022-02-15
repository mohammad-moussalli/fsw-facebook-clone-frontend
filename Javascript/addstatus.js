let addstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/status-api.php";

let id = localStorage.getItem("id");
let post = document.getElementById("add_status");

const addStatus = async (id, post) => {
    const response = await fetch(addstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            user_id: id,
            post: post
        })
    });
    const token = await response.json();
    return token;
};
if(addStatus(id, post) != null){

    addStatus(id, post).then((data) => {
        post_id = data.post_id;
        post = data.post;
        document.getElementById("post_button").addEventListener("click", function(){
            document.getElementById("feed").innerHTML += `<div class="posts" id="post_${post_id}">${post}</div>`;
        })        
    });
    
}
