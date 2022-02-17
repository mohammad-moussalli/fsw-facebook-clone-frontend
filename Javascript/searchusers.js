let searchusers_api = "http://localhost/fsw-facebook-clone-backend/php/searchforuses_api.php";

let id = localStorage.getItem("token");

const myData = async (sender, first_name, last_name) => {
    const response = await fetch(searchusers_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            sender: sender,
            first_name: first_name,
            last_name: last_name
        })
    });
    const json_object = await response.json();
    if (json_object.status == "User not found"){
        console.log(json_object.status);
    }else{
        for(let i in json_object){
            let first_name = json_object[i].first_name;
            let last_name = json_object[i].last_name;
            document.getElementById("profile_data").innerHTML += 
            `<div class="data" id="name">${first_name} ${last_name}</div>`;
        }
    }
};

document.getElementById("search_button").addEventListener("click",function(){
    myStatus(id);
});