let addlike_api = "http://localhost/fsw-facebook-clone-backend/PHP/addlike-api.php";

let id = localStorage.getItem("id");
let post_id = document.getElementById(`post_${post_id}`);

const addLike = async (id, post) => {
    const response = await fetch(addlike_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            user_id: id,
            post_id: post
        })
    });
    const token = await response.json();
    return token;
};
if(addLike(id, post) != null){
    document.getElementById("like_button").addEventListener("click", function(){
        addLike(id, post_id);
    });        
};
    