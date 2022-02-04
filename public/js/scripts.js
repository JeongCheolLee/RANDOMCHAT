const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

// get Dom element
const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

// global socket handler
socket.on('user_connected', (username) => {
  console.log(`${username} connected!`);
});

//* draw functions
const drawHelloStrager = (username) => {
  helloStrangerElement.innerText = `Hello ${username} Stranger :)`;
};

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => {
    drawHelloStrager(data);
  });
}

function init() {
  helloUser();
}

init();
