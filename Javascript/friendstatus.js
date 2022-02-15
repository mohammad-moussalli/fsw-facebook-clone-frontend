let friendstatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/friend-status-api.php";

let id = localStorage.getItem("id");

const friendStatus = async (id) => {
    const response = await fetch(friendstatus_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            id: id
        })
    });
    const token = await response.json();
    return token;
};
if(friendStatus(id) != null){
    friendStatus(id).then((data) => {
        data.forEach((element) => {
          document.getElementById("feed").innerHTML += `<div class="posts" id="post_${element.id}">${element}</div>`;
        });                                             
    });        
};