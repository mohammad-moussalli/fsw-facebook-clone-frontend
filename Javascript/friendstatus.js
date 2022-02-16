let friendstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/friend-status-api.php";

//let id = localStorage.getItem("id");

const friendStatus = async (id) => {
    const response = await fetch(friendstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            sender: sender
        })
    });
    const json_object = await response.json();

    if (json_object.status == "User not found"){
        console.log(json_object.status);
    }else{
        post_id = json_object.post_id;
        timestamp = json_object.timestamp;
        
        for(let i in json_object){
            let first_name = json_object[i].first_name;
            let last_name = json_object[i].last_name;
            let post = json_object[i].post;
            let timestamp = json_object[i].timestamp;
            document.getElementById("feed").innerHTML += 
            `<div class="fullname">${first_name} ${last_name}</div>
             <div class="posts" id="post_${post_id}">${post}</div>
             <div class="timestamps" id="timestamp_${post_id}">${timestamp}</div>`;
        }

        let likebtn = document.createElement("button");
            let counter = 0;
            likebtn.innerHTML = `Likes ${counter}`;
            likebtn.type = "button";
            likebtn.id =`like_button${post_id}`;
            likebtn.class ="like_buttons";
            document.getElementById("feed").appendChild(likebtn);
    }
};

window.addEventListener("load",function(){
    friendStatus(id);
});
