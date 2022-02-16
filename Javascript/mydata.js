let userdata_api = "http://localhost/fsw-facebook-clone-backend/PHP/userdata-api.php";

let id = localStorage.getItem("id");

const myData = async (id) => {
    const response = await fetch(userdata_api, {
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
        for(let i in json_object){
            let first_name = json_object[i].first_name;
            let last_name = json_object[i].last_name;
            let dob = json_object[i].dob;
            let email = json_object[i].email;
            let picture = json_object[i].picture;
            let country = json_object[i].country;
            let city = json_object[i].city;
            let street = json_object[i].street;
            document.getElementById("profile_data").innerHTML += 
            `<div class="data" id="name">${first_name} ${last_name}</div>
             <div class="data" id="dob">${dob}</div>;
             <div class="data" id="email">${email}</div>;
             <div class="data" id="picture">${picture}</div>;
             <div class="data" id="country">${country}</div>;
             <div class="data" id="city">${city}</div>;
             <div class="data" id="street">${street}</div>`;
        }
    }
};

document.getElementById("profile_button").addEventListener("click",function(){
    myStatus(id);
});