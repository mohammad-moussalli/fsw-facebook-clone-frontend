const signIn = async (email, password) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/signin_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const token = await response.json();
  return token;
};

const addFriend = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/addfriend_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const removeFriend = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/removefriend_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const blockFriend = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/blockfriend_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const unblockFriend = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/unblockfriend_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const acceptRequest = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/acceptfriend_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const rejectRequest = async (sender, receiver) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/rejectrequest_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      receiver: receiver,
    }),
  });
  const data = await response.json();
  return data;
};

const getfriendRequests = async (sender) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/getfriendrequests_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
    }),
  });
  const data = await response.json();
  document.getElementById("column-two").innerHTML = null;
  data.forEach((element) => {
    first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
    last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;
    console.log("test");
    document.getElementById("column-two").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
                    <img class="friend-img" src=${element.picture}>
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="button-row">
                    <button class="accept-btn" id="${element.id}-accept">Accept</button>
                    <button class="reject-btn" id="${element.id}-reject">Reject</button>
                </div>
            </div>`;
  });
  return data;
};

const getFriends = async (sender) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/getfriends_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
    }),
  });
  const data = await response.json();
  document.getElementById("column-two").innerHTML = null;
  console.log(data);
  data.forEach((element) => {
    first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
    last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;
    document.getElementById("column-two").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
                    <img class="friend-img" src=${element.picture}>
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="button-row">
                    <button class="block-btn" id="${element.id}-block">Block</button>
                    <button class="remove-btn" id="${element.id}-remove">Remove</button>
                </div>
            </div>`;
  });
  return data;
};

const getblockedUsers = async (sender) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/getblockedusers_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
    }),
  });

  const data = await response.json();
  document.getElementById("column-two").innerHTML = null;
  data.forEach((element) => {
    first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
    last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;
    console.log("test");
    document.getElementById("column-two").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
                    <img class="friend-img" src=${element.picture}>
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="button-row">
                    <button class="unblock-btn" id="${element.id}-unblock">Unblock</button>
                </div>
            </div>`;
  });
  return data;
};

const getStatuses = async (sender) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/friend_status_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
    }),
  });

  const data = await response.json();
  document.getElementById("column-two").innerHTML = null;
  console.log("test");
  data.forEach((element) => {
    post = element.post;
    first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
    last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;

    document.getElementById("column-two").innerHTML += `
            <div class="status-container">
              <div class="friend-row-status">
                    <img class="friend-img" src=${element.picture}>
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="status-row">
                    <span class="post-class" id="post">${post}</span>
                
                 <div class="time-row">${element.timestamp}</div>`;
  });
  return data;
};

let userdata_api = "http://localhost/fsw-facebook-clone-backend/php/userdata_api.php";
let id = localStorage.getItem("id");
const getData = async (sender) => {
  const response = await fetch(userdata_api, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
    }),
  });
  const json_object = await response.json();
  if (json_object.status == "User not found") {
    console.log(json_object.status);
  } else {
    /*for (let i in json_object) {
      let first_name = json_object[i].first_name;
      let last_name = json_object[i].last_name;
      let dob = json_object[i].dob;
      let email = json_object[i].email;
      let picture = json_object[i].picture;
      let country = json_object[i].country;
      let city = json_object[i].city;
      let street = json_object[i].street;
      document.getElementById("profile_data").innerHTML += `<div class="data" id="name">${first_name} ${last_name}</div>
             <div class="data" id="dob">${dob}</div>;
             <div class="data" id="email">${email}</div>;
             <div class="data" id="picture">${picture}</div>;
             <div class="data" id="country">${country}</div>;
             <div class="data" id="city">${city}</div>;
             <div class="data" id="street">${street}</div>`;*/
    return json_object;
  }
};
const searchUsers = async (sender, name) => {
  const response = await fetch("http://localhost/fsw-facebook-clone-backend/php/searchforusers_api.php", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      sender: sender,
      name: name,
    }),
  });
  const data = await response.json();
  document.getElementById("column-two").innerHTML = null;
  console.log(data);
  data.forEach((element) => {
    first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
    last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;
    document.getElementById("column-two").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
                    <img class="friend-img" src=${element.picture}>
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="button-row">
                    <button class="add-btn" id="${element.id}-add">Add</button>
                </div>
            </div>`;
  });
  return data;
};
