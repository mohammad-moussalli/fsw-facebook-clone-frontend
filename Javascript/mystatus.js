let mystatus_api = "http://localhost/fsw-facebook-clone-backend/PHP/mystatus-api.php";

let id = localStorage.getItem("id");

const myStatus = async (id) => {
    const response = await fetch(mystatus_api, {
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
if(myStatus(id) != null){
    myStatus(id).then((data) => {
        data.forEach((element) => {
          document.getElementById("feed").innerHTML += `<div class="posts" id="post_${element.id}">${element}</div>`;
        });                                             
    });        
};