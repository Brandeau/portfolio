//const channels = document.getElementsByClassName("channel");
const log = document.getElementById("log")
const test = document.getElementById("test");
const channels = document.getElementById("channels");
const header = document.getElementById("main-header")

function openChat(){
    channels.style.display = "none";
    header.style.display = "none";
    log.style.display = "block";
}

test.addEventListener("click", openChat);