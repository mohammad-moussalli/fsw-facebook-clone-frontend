let editstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/edit-status-api.php";

let post = document.getElementById(`post_${post_id}`);
let id = localStorage.getItem("id");

const editStatus = async (post_id, post, id) => {
    const response = await fetch(editstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            post_id: post_id,
            post: post,
            user_id: id
        })
    });
    const token = await response.json();
    return token;
};
if(editStatus(post_id, post, id) != null){

    editStatus(post_id, post, id).then((data) => {
        post_id = data.post_id;
        post = data.post;
        document.getElementById(`edit_button${post_id}`).addEventListener("click", function(){
            document.getElementById(`post_${post_id}`).innerHTML = post;
        })        
    });
    
}
