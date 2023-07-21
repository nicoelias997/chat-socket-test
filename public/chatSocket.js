var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value); //envio el evento mediante el input, y se reestablece despues a vacio
    input.value = '';
  }
});

socket.on('chat message', function(msg) { //el servidor puede escuchar el evento mediante el on, y establecera una funcion como guste
  var item = document.createElement('li'); //podemos reenviar a una cantidad grande de usuarios, incluyendome, o no incluyendome
  item.textContent = `${msg} - ${socket.id}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
