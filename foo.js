window.onload = () => {
  const signIn = async (email, password) => {
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/login_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/addfriend_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/removefriend_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/blockfriend_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/unblockfriend_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/acceptfriend_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/rejectrequest_api.php", {
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/getfriendrequests_api.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        sender: sender,
      }),
    });
    const data = await response.json();
    document.getElementById("friends").innerHTML = null;
    data.forEach((element) => {
      first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
      last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
      fullname = `${first_name} ${last_name}`;
      console.log("test");
      document.getElementById("friends").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/getfriends_api.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        sender: sender,
      }),
    });
    const data = await response.json();
    document.getElementById("friends").innerHTML = null;
    console.log(data);
    data.forEach((element) => {
      first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
      last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
      fullname = `${first_name} ${last_name}`;
      document.getElementById("friends").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
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
    const response = await fetch("http://localhost/fsw-facebook-clone-backend/getblockedusers_api.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        sender: sender,
      }),
    });

    const data = await response.json();
    document.getElementById("friends").innerHTML = null;
    data.forEach((element) => {
      first_name = element.first_name.charAt(0).toUpperCase() + element.first_name.slice(1).toLowerCase();
      last_name = element.last_name.charAt(0).toUpperCase() + element.last_name.slice(1).toLowerCase();
      fullname = `${first_name} ${last_name}`;
      console.log("test");
      document.getElementById("friends").innerHTML += `
            <div class="friend-container">
                <div class="friend-row">
                    <span class="fullname" id="full-name">${fullname}</span>
                </div>
                <div class="button-row">
                    <button class="unblock-btn" id="${element.id}-unblock">Unblock</button>
                </div>
            </div>`;
    });
    return data;
  };

  signIn("saad@saad.saad", "saad").then((data) => {
    //console.log(data.token);
    token = data.token;
    console.log(data);
    localStorage.setItem("token", token);
  });

  document.getElementById("allfriends").addEventListener("click", (e) => {
    getFriends(localStorage.getItem("token")).then(() => {
      document.querySelectorAll(".block-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          blockFriend(localStorage.getItem("token"), id);
        });
      });
      document.querySelectorAll(".remove-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          removeFriend(localStorage.getItem("token"), id);
        });
      });
    });
  });

  document.getElementById("requests").addEventListener("click", (e) => {
    e.preventDefault();
    getfriendRequests(localStorage.getItem("token")).then(() => {
      document.querySelectorAll(".accept-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          acceptRequest(localStorage.getItem("token"), id);
        });
      });
      document.querySelectorAll(".reject-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          rejectRequest(localStorage.getItem("token"), id);
        });
      });
    });
  });

  document.getElementById("blocks").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.getItem("token");
    getblockedUsers(localStorage.getItem("token")).then(() => {
      document.querySelectorAll(".unblock-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          unblockFriend(localStorage.getItem("token"), id);
        });
      });
    });
  });

  /*addFriend(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjEzNTY5OTk1MjQsIm5iZiI6MTM1NzAwMDAwMCwiaWQiOjZ9.jLFdDS2tMoMCiIA89e7NAx1YRoxWBiOVJl5j0szPiZk",
    "2"
  ).then((data) => {
    //console.log(data.token);
    console.log(data);
  });*/
};
