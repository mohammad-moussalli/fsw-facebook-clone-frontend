let getlike_api = "http://localhost/fsw-facebook-clone-backend/php/likes-api.php";

let post_id = document.getElementById(`post_${post_id}`);

const getLikes = async (post_id) => {
    const response = await fetch(addlike_api, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        })
        ,body: JSON.stringify({
            post_id: post_id
        })
    });
    const token = await response.json();
    return token;
};
if(getLikes(post_id) != null){
    getLikes(post_id).then((data) => {
        count = data.count;
        document.getElementById(`like_${post_id}`).innerHTML = count;
    });      
};
