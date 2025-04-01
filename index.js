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
const randomUsername = "anonymous " + (Math.floor(Math.random() * 1000))

for (let i = 0; i < posts.length; i++){
    Elfeed.innerHTML += `
    <div class="container" data-liked=false>
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
            <img class="icon write" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
        </div>
        <div class="comments padding-left" data-commenting=false>
            <p class="bold-txt likes">${posts[i].likes} likes</p> 
            <p class="usernametxt"><span class="bold-txt">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>
    `
}
document.addEventListener("click", function(e){
    if (e.target.className.includes("heart")) {
        liking(e)
    } else if (e.target.className.includes("write")) {
        commentCreation(e)
    } else if (e.target.className.includes("sending")) {
        commentSending(e)
    }
})

document.addEventListener("dblclick", function(e){
    if (e.target.className.includes("main-pic")){
        liking(e)
        console.log(e.target)
    }
})

Elfeed.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        commentSending(event)
    }
})

function liking (event){
    const post = event.target.closest(".container");
    const likesEl = post.querySelector(".likes");
    const heartEl = post.querySelector(".heart");
    let isliked = post.dataset.liked;
    const likes_txt = likesEl.textContent;
    let likes_num = parseInt(likes_txt);

    if (isliked == "false"){
        const likes_total = (likes_num + 1) + " likes";
        post.querySelector(".likes").textContent = likes_total;
        heartEl.src = "images/icon-heart-liked.png";
        post.dataset.liked = "true"

    } else if (isliked == "true"){
        const likes_total = (likes_num - 1) + " likes";
        post.querySelector(".likes").textContent = likes_total;
        heartEl.src = "images/icon-heart.png";
        post.dataset.liked = "false"
    }
}

function commentCreation (event){
    const post = event.target.closest(".container")
    const commentsEl = post.querySelector(".comments");
    let iscommenting = commentsEl.dataset.commenting

    if (iscommenting == "false"){
        const newInput = document.createElement("input");
        const newButton = document.createElement("button");
        newButton.textContent = "Send"
        newButton.className = "sending"
        newInput.className = "sendingtxt"
        newInput.placeholder = "Add a comment..."

        commentsEl.append(newInput, newButton)
        commentsEl.dataset.commenting = "true"
        newInput.focus()

    } else if (iscommenting == "true"){
        const oldInput = post.querySelector("input")
        const oldButton = post.querySelector("button")
        commentsEl.removeChild(oldInput)
        commentsEl.removeChild(oldButton)
        commentsEl.dataset.commenting = "false"
    }
};

function commentSending (event){
    const post = event.target.closest(".container")
    let newCommenttxt = post.querySelector(".sendingtxt").value
    const commentsEl = post.querySelector(".usernametxt")

    // delete the first spaces
    newCommenttxt = newCommenttxt.trim()
    if (newCommenttxt[0] != undefined ){
        commentsEl.innerHTML += `<p> <span  class="bold-txt">${randomUsername}</span> ${newCommenttxt}</p>`
        post.querySelector(".sendingtxt").value = ""
    }
}


