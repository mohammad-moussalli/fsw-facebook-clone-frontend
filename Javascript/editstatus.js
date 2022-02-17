let editstatus_api = "http://localhost/fsw-facebook-clone-backend/php/edit_status-api.php";

const editStatus = async (post, sender, post_id) => {
    const response = await fetch(editstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            post: post,
            sender: sender,
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

    let edit_buttons = document.getElementsByClassName("edit_buttons");
    for(let i = 0; i<edit_buttons.length; i++){
        let button_id = edit_buttons[i].id;
        let post_id = button_id.replace(/\D/g, "");
        document.getElementById(post_id)
        document.getElementById("button_id").addEventListener("click", function(){
            let post = document.getElementById(`post_${post_id}`)
            post.contentEditable = true;
            let id = localStorage.getItem("id");
            editStatus(post, id, post_id);
        })
    }

    let submit_buttons = document.getElementsByClassName("submit_buttons");
    for(let i = 0; i<submit_buttons.length; i++){
        let button_id = submit_buttons[i].id;
        let post_id = button_id.replace(/\D/g, "");
        let edited_post = document.getElementById(post_id);
        document.getElementById("button_id").addEventListener("click", function(){
            edited_post.contentEditable = false;
        })
    }
   