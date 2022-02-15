let addstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/status-api.php";

const addStatus = async (id, post) => {
    const response = await fetch(addstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            user_id: id,
            post: post
        })
    });
    const json_object = await response.json();
    if (json_object.status == "Post added successfully"){
        document.getElementById("feed").appendChild(json_object.post);
    }else{
        console.log(json_object.status);
    }};

    document.getElementById("post_button").addEventListener("click", function(){
        let id = localStorage.getItem("id");
        let post = document.getElementById("add_status");  
        addStatus(id, post);
    });
