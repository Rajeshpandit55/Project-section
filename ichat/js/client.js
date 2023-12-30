// const fs = require("fs");
// let text = fs.readFileSync("dele.txt","utf-8");
// console.log("this is patna in bihar");
// console.log(text);


const socket = io('http://localhost:80000');

//Get DOm element in respective js variables.
const form = document.getElemettsById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector (".container")

//audio that will play on recieveing messages
var audio =new Audio("message.mp3");


//function which wil append event info to the container.
const append =(message,position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText= message;
    messageElement.classList.add('message')
    messageElementclassList.add(position);
    messageContainer.append(messageElement);
    if(position =='left'){
        audio.play();
    }
 
}   


//Ask new user his her name and let the server know
const name =prompt("Enter your name to join");
socket.emit(`new-user-joined`,name);


//if a new user joins, recieve his her name from the server
socket.on ('user-joined', name=>{
append(`${name} joined the chat`,right)
})


//if server send the message ,recieve it
socket.on ('recieve', name=>{
    append(`${data.name}:${data.user}`,'left')
    })

// if a user leave the chat ,append the info to the container
    socket.on ('left', name=>{
        append(`${name} left the chat`,'left')
        })

// if the form gets sumitted send server the message
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const message= messageInput.Value;
        append('you:${message}', 'right');
        socket.emit('send',message);
        messageInput.Value =''
    })