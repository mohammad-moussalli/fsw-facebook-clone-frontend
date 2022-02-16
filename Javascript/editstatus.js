let editstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/edit-status-api.php";

const editStatus = async (post, id, post_id) => {
    const response = await fetch(editstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            post: post,
            user_id: id,
            post_id: post_id
        })
    });
    const json_object = await response.json();
    if (json_object.status == "Status updated"){
        post_id = json_object.post_id;
        updated_post = json_object.post;
        timestamp = json_object.timestamp;

        document.getElementById(`post_${post_id}`).innerHTML = updated_post;
        document.getElementById(`post_${post_id}`).innerHTML += timestamp;
    }else{
        console.log(json_object.status);
    }
};

document.querySelectorAll("edit_buttons").forEach((button) => {
    let post_id = button.id.replace(/\D/g, "");
    console.log(post_id);
    document.getElementById(button.id).addEventListener("click", function(){
        let post = document.getElementById(`post_${id}`)
        post.contentEditable = true;
        let id = localStorage.getItem("id");
        editStatus(post, id, post_id);
    });

});

document.querySelectorAll("submit_buttons").forEach((button) => {
    document.getElementById(button.id).addEventListener("click", function(){
        edited_post.contentEditable = false;
    });
});
   