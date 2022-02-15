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
        document.getElementById("feed").innerHTML += `<div class="posts" id="post_${post_id}">${post}<br/>${timestamp}</div>`;
    }else{
        console.log(json_object.status);
    }
};

    document.getElementById("post_button").addEventListener("click", function(){
        let id = localStorage.getItem("id");
        let post = document.getElementById("post_status").value;  
        addStatus(id, post);
    });
