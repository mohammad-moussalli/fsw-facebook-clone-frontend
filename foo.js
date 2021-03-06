window.onload = () => {

  getData(localStorage.getItem("token")).then((data) => {
    console.log(data[0].picture);
    let str = data[0].picture;
    first_name = data[0].first_name.charAt(0).toUpperCase() + data[0].first_name.slice(1).toLowerCase();
    last_name = data[0].last_name.charAt(0).toUpperCase() + data[0].last_name.slice(1).toLowerCase();
    fullname = `${first_name} ${last_name}`;
    document.getElementById("profile-picture").src = data[0].picture;
    document.getElementById("my-name").innerText = fullname;
  });

  function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      image = new Image();
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  document.getElementById("allfriends").addEventListener("click", (e) => {
    e.preventDefault();
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
          document.getElementById("column-two").innerHTML = null;
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
    getblockedUsers(localStorage.getItem("token")).then(() => {
      document.querySelectorAll(".unblock-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          unblockFriend(localStorage.getItem("token"), id);
        });
      });
    });
  });

  document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.getItem("token");
    console.log("test");
    getStatuses(localStorage.getItem("token")).then(() => {});
  });

  document.getElementById("searchsubmit").addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("searchinput").value;
    searchUsers(localStorage.getItem("token"), input).then(() => {
      document.querySelectorAll(".add-btn").forEach((button) => {
        let id = button.id.replace(/\D/g, "");
        document.getElementById(button.id).addEventListener("click", () => {
          addFriend(localStorage.getItem("token"), id);
        });
      });
    });
  });

  document.getElementById("logout").addEventListener("click", function(){
    localStorage.clear();
    location.href = "http://localhost/fsw-facebook-clone-frontend/index.html";
  });
};

