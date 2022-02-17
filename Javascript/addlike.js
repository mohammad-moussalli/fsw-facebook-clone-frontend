let addlike_api = "http://localhost/fsw-facebook-clone-backend/php/addlike-api.php";

//let id = localStorage.getItem("id");

const addLike = async (id, post) => {
    const response = await fetch(addlike_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            sender: sender,
            post_id: post
        })
    });
    const json_object = await response.json();
    
        if (json_object.status == "Like added"){
            post_id = json_object.post_id;
            user_id = json_object.user_id;
            document.getElementById(`like_button${post_id}`).addEventListener("click", function(){
            let innerHTML = document.getElementById(`like_button${post_id}`).innerHTML;
            let counter = innerHTML.replace(/\D/g, "");
            counter += 1;
            document.getElementById(`like_button${post_id}`).innerHTML = `Likes ${counter}`;
            });   
        }else{
            console.log(json_object.status);
        }

        let like_buttons = document.getElementsByClassName("like_buttons");
        for(let i = 0; i<like_buttons.length; i++){
            let button_id = like_buttons[i].id;
            let post_id = button_id.replace(/\D/g, "");
            console.log(post_id);
            console.log(button_id);
            document.getElementById("button_id").addEventListener("click", function(){
            let post = document.getElementById(`post_${post_id}`)
            let id = localStorage.getItem("id");
            editStatus(id, post_id);
        })
    }
 
};
