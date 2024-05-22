const log = document.getElementById("log")

const chatWrapper = document.getElementById("chat-wrapper");
const chatHeader = document.getElementById("chat-header");

const channels = document.getElementById("channels");
const header = document.getElementById("main-header")
const inputBar = document.getElementById("input-bar");

const introduction = `My name is Diego Andrade. I'm a professional translator who one day decided to learn coding. I've worked as a freelancer for the past 
12 years translating text from English, Portuguese and Japanese. 
As a beginner programmer I've dabbled in HTML, CSS and JavaScript. I particularly
like JS's quirkiness, its unique type of inheritance and its flexibility. I have basic notions 
of React and MongoDB, as well as a bit of JQuery. I document my code with JSDOC and run tests with 
Jest.
I'm familiarized with git/github, the command line and have a bit of knowledge of agile
development.`

const githubLink = "Here's the link";

const contact = "You can contact me here";

function renderQuestion(questionText){
    const question = document.createElement("p");
    question.textContent = questionText;
    chatWrapper.append(question);
    question.id = "question";
    question.className = "slideup";
    question.style.display = "flex"
}

function renderAnswer(answerText){
    const answer = document.createElement("p");
    answer.textContent = answerText;
    chatWrapper.append(answer);
    answer.id = "answer";
    answer.className = "slideup";
    answer.style.display = "flex";
}

function hideChatList(){
    channels.style.display = "none";
    header.style.display = "none";
    log.style.display = "block";
    inputBar.style.display = "block";
}

function addChatTitle(title){
    const chatTitle = document.createElement("h2");
    chatTitle.textContent = `${title}`;
    chatHeader.append(chatTitle);
}

function openChat(event){

    const clickedElement = event.target;

    if(clickedElement.closest("#about")){
        hideChatList();
        addChatTitle("About");

        setTimeout(() => {
            renderQuestion("Who are you?");
        }, 1000);
        setTimeout(() => {
            renderAnswer(introduction);
        }, 5000);

    } else if(clickedElement.closest("#projects")){
        hideChatList();
        addChatTitle("Projects");

        setTimeout(() => {
            renderQuestion("Got anything to show me?");
        }, 1000);
        setTimeout(() => {
            renderAnswer(githubLink);
        }, 5000);

    } else if(clickedElement.closest("#contact")){
        hideChatList();
        addChatTitle("Contact");

        setTimeout(() => {
            renderQuestion("How can I get in contact with you?");
        }, 1000);
        setTimeout(() => {
            renderAnswer(contact);
        }, 5000);
    }
}

channels.addEventListener("click", openChat);

    