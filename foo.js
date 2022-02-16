window.onload = () => {
  signIn("saad@saad.saad", "saad").then((data) => {
    //console.log(data.token);
    token = data.token;
    console.log(data);
    localStorage.setItem("token", token);
  });

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

  document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.getItem("token");
    console.log("test");
    getStatuses(localStorage.getItem("token")).then(() => {});
  });

  /*addFriend(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJhdWQiOiJsb2NhbGhvc3QiLCJpYXQiOjEzNTY5OTk1MjQsIm5iZiI6MTM1NzAwMDAwMCwiaWQiOjZ9.jLFdDS2tMoMCiIA89e7NAx1YRoxWBiOVJl5j0szPiZk",
    "2"
  ).then((data) => {
    //console.log(data.token);
    console.log(data);
  });*/
};
