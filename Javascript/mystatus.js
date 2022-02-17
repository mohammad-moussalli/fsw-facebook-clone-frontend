let mystatus_api = "http://localhost/fsw-facebook-clone-backend/php/mystatus_api.php";

let id = localStorage.getItem("token");

const myStatus = async (sender) => {
    const response = await fetch(mystatus_api, {
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
            let post = json_object[i].post;
            let timestamp = json_object[i].timestamp;
            document.getElementById("feed").innerHTML += 
            `<div class="posts" id="post_${post_id}">${post}</div>
             <div class="timestamps" id="timestamp_${post_id}">${timestamp}</div>`;
        }
    }
};

document.getElementById("profile_button").addEventListener("click",function(){
    myStatus(id);
});