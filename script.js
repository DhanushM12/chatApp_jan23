const socket = io('http://localhost:3000/')

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name')
console.log(name)

socket.emit('new-user', name);

socket.on('user-connected', name => {

})

messageForm.addEventListener('submit', e=> {
    e.preventDefault();
    const message = messageInput.value;
    appendMessage(`You : ${message}`);
})

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement)
}