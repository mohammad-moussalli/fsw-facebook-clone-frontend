let signup_api = "http://localhost/fsw-facebook-clone-backend/PHP/signup-api.php";

document.getElementById("createaccount_button").addEventListener("click", function(){
    document.getElementById("signup_form").style.display;
});

const signUp = async (first_name, last_name, dob, email, password, profile_picture, country, city, street) => {
    const response = await fetch(signup_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
        })
        ,body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            email: email,
            password: password,
            profile_picture: profile_picture,
            country: country,
            city: city,
            street: street
        })
    });
    const json_object = await response.json();
    if (json_object.status == "Welcome to Facebook"){
        token = json_object.token;
        localStorage.setItem("id", token);
        location.href = "http://localhost/fsw-facebook-clone-frontend/HTML/homepage.html";
        return token;
    }else{
        console.log(json_object.status);
    }
};

document.getElementById("signup_button").addEventListener("click", function(){
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;
    let profile_picture = document.getElementById("profile_picture").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let street = document.getElementById("street").value;  
    signUp(first_name, last_name, dob, email, password, profile_picture, country, city, street);
});

