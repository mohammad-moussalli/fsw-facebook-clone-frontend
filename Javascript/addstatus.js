let addstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/status-api.php";

const addStatus = async (id, post) => {
    
    const response = await fetch(addstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            id: id,
            post: post
        })
    });
    
    const json_object = await response.json();
    
    if (json_object.status == "Post added successfully"){
        post_id = json_object.post_id;
        timestamp = json_object.timestamp;
        document.getElementById("feed").innerHTML += 
        `<div class="posts" id="post_${post_id}">${post}</div>
         <div class="timestamps" id="timestamp_${post_id}">${timestamp}</div>`;

        let editbtn = document.createElement("button");
        editbtn.innerHTML = "Edit";
        editbtn.type = "button";
        editbtn.id =`edit_button${post_id}`;
        editbtn.class ="edit_buttons";
        document.getElementById("feed").appendChild(editbtn);

        let submitbtn = document.createElement("button");
        submitbtn.innerHTML = "Submit";
        submitbtn.type = "button";
        submitbtn.id =`submit_button${post_id}`;
        submitbtn.class ="submit_buttons";
        document.getElementById("feed").appendChild(submitbtn);

        let likebtn = document.createElement("button");
        let counter = 0;
        likebtn.innerHTML = `Likes ${counter}`;
        likebtn.type = "button";
        likebtn.id =`like_button${post_id}`;
        likebtn.class ="like_buttons";
        document.getElementById("feed").appendChild(likebtn);
    }else{
        console.log(json_object.status);
    }
};

    document.getElementById("post_button").addEventListener("click", function(){
        let id = localStorage.getItem("id");
        let post = document.getElementById("post_status").value;  
        addStatus(id, post);
    });
