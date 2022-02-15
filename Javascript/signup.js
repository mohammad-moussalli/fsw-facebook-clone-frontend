let signin_api = "http://localhost/fsw-facebook-clone-backend/PHP/signin-api.php";
let signup_api = "http://localhost/fsw-facebook-clone-backend/PHP/signup-api.php";


let first_name = document.getElementById("first_name").value;
let last_name = document.getElementById("last_name").value;
let dob = document.getElementById("dob").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let profile_picture = document.getElementById("profile_picture").value;
let country = document.getElementById("country").value;
let city = document.getElementById("city").value;
let street = document.getElementById("street").value;

const signUp = async (first_name, last_name, dob, email, password, profile_picture, country, city, street) => {
    const response = await fetch(signup_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
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
    const token = await response.json();
    return token;
};
if(signUp(first_name, last_name, dob, email, password, profile_picture, country, city, street) != null){
    signUp(first_name, last_name, dob, email, password, profile_picture, country, city, street).then((data) => {
        token = data.token;
        localStorage.setItem("id", token);
        location.href = "http://localhost/fsw-facebook-clone-frontend/HTML/homepage.html";
      });
}