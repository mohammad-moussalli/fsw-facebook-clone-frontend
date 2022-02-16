let addlike_api = "http://localhost/fsw-facebook-clone-backend/PHP/addlike-api.php";

//let id = localStorage.getItem("id");

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
    const json_object = await response.json();
    
        if (json_object.status == "Like added"){
            post_id = json_object.post_id;
            user_id = json_object.user_id;
            document.getElementById(`like_button${post_id}`).addEventListener("click", function(){
            let innerHTML = document.getElementById(`like_button${post_id}`).innerHTML;
            let counter = innerHTML.replace(/\D/g, "");
            counter += 1;
            document.getElementById(`like_button${post_id}`).innerHTML = `Likes${counter}`;
            });   
        }else{
            console.log(json_object.status);
        }
 
};
