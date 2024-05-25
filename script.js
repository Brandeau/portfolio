
const log = document.getElementById("log")

const chatWrapper = document.getElementById("chat-wrapper");
const chatHeader = document.getElementById("chat-header");
const chatHeaderImage = document.getElementById("chat-header-image")

const channels = document.getElementById("channels");
const header = document.getElementById("main-header")
const inputBar = document.getElementById("input-bar");

const introduction = "";

const githubLink = "Here's the link";

const contact = "You can contact me here";

const miscellaneousAnswer = "";

async function getMessages(){
    const response = await fetch("/resources/data/messages.json");
    const messages = await response.json();

    return messages;
}

/**
 * Injects the question to the chat window
 * @param {string} questionText 
 */
function renderQuestion(questionText){

    if(!nodeExists("question")){
        const question = document.createElement("p");
        question.textContent = questionText;
        chatWrapper.append(question);
        question.id = "question";
        question.className = "slideup";
        question.style.display = "flex"
    }
    
}

/**
 * Injects the answer to the chat window
 * @param {string} answerText 
 */
function renderAnswer(answerText){

    if(!nodeExists("answer")){
        const answer = document.createElement("p");
        answer.textContent = answerText;
        chatWrapper.append(answer);
        answer.id = "answer";
        answer.className = "slideup";
        answer.style.display = "flex";
    }
    
}

/**
 * Hides the list of chats and opens up a chat window
 */
function hideChatList(){
    channels.style.display = "none";
    header.style.display = "none";
    log.style.display = "block";
    inputBar.style.display = "block";
}

/**
 * Adds a title to the chat page
 * @param {string} title 
 */
function addChatTitle(title){

    if(!nodeExists("chat-title")){
        const chatTitle = document.createElement("h2");
        chatTitle.id = "chat-title";
        chatTitle.textContent = `${title}`;
        chatHeader.append(chatTitle);
    }
    
}

/**
 * Checks if node exists on the DOM
 * @param {string} nodeName 
 * @returns {boolean}
 */
function nodeExists(nodeName){

    const node = document.getElementById(nodeName);

    return node ? true : false;
}

/**
 * Hides the chat and returns to the chat list
 */
function hideChats(){
    channels.style.display = "block";
    header.style.display = "block";
    log.style.display = "none";
    inputBar.style.display = "none";

    
}

/**
 * Removes the previous question and answer if there are any
 */
function removePrevious(){
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    const chatTitle = document.getElementById("chat-title");

    if(question){question.remove();}
    if(answer) {answer.remove();}
    if(chatTitle){chatTitle.remove();}
}

/**
 * Event handler that opens the chat
 * @param {MouseEvent} event 
 */
async function openChat(event){

    const clickedElement = event.target;
    const messages = await getMessages();

    if(clickedElement.closest("#about")){
        
        hideChatList();
        removePrevious();
        addChatTitle("About");
        
        setTimeout(() => {
            renderQuestion(messages.whoQ);
        }, 1000);
        setTimeout(() => {
            renderAnswer(messages.whoA);
        }, 5000);


    } else if(clickedElement.closest("#projects")){
        hideChatList();
        removePrevious();
        addChatTitle("Projects");
        
        setTimeout(() => {
            renderQuestion(messages.whatQ);
        }, 1000);
        setTimeout(() => {
            renderAnswer(messages.whatA);
        }, 5000);

    } else if(clickedElement.closest("#miscellaneous")){
        hideChatList();
        removePrevious();
        addChatTitle("Miscellaneous");

        setTimeout(() => {
            renderQuestion(messages.whatElseQ);
        }, 1000);
        setTimeout(() => {
            renderAnswer(messages.whatElseA);
        }, 5000);
    } else if(clickedElement.closest("#contact")){
        hideChatList();
        removePrevious();
        addChatTitle("Contact");

        setTimeout(() => {
            renderQuestion(messages.howQ);
        }, 1000);
        setTimeout(() => {
            renderAnswer(messages.howA);
        }, 5000);
    }
}

channels.addEventListener("click", openChat);
chatHeaderImage.addEventListener("click", hideChats);



    