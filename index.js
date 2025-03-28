const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const Elfeed = document.getElementById("feed")

for (let i = 0; i < posts.length; i++){
    Elfeed.innerHTML += `
    <div class="container">
        <div class= "section-username padding-left">
            <img class="profile-pic" src=${posts[i].avatar}>
            <div class="user-info-txt">
                <h2 class="bold-txt">${posts[i].name}</h2>
                <h3>${posts[i].location}</h3>
            </div>
        </div>
        <img class="main-pic" src=${posts[i].post}>
        <div class="section-btn padding-left">
            <img class="icon heart" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
        </div>
        <div class="comments padding-left">
            <p class="bold-txt likes">${posts[i].likes} likes</p> 
            <p><span class="bold-txt">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>
    `
}

document.querySelectorAll(".heart").forEach(button => {
    button.addEventListener("click", function (){
        const post = event.target.closest(".container");
        const likesEl = post.querySelector(".likes");
        const likes_txt = likesEl.textContent;
        let likes_num = parseInt(likes_txt);
        const likes_total = (likes_num + 1) + " likes";
        post.querySelector(".likes").textContent = likes_total;
    })});

