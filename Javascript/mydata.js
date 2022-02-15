let userdata_api = "http://localhost/fsw-facebook-clone-backend/PHP/userdata-api.php";

let id = localStorage.getItem("id");

const myData = async (id) => {
    const response = await fetch(userdata_api, {
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
if(myData(id) != null){
    myData(id).then((data) => {
        data.forEach((element) => {
          document.getElementById("profile").innerHTML += `<div class="userdata">${element}</div>`;
        });                                             
    });        
};