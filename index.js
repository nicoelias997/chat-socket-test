const express = require('express');
const app = express();
const path = require('path'); 

//settings
app.set('port', process.env.PORT || 3000);

//static files->esto envia toda la carpeta public al navegador de forma estatica
app.use(express.static(path.join(__dirname + '/public')));

//start the server
const server = app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'))
})

//Configuracion del socket
const socket = require('socket.io'); //instanciamos socket
const io = socket(server) //->recibe la configuracion del chat, le pasamos app ya que tendra todo el codigo del servidor. Socket Io necesita un servidor inicializado.

//configuracion del websocket
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});//el primer evento es cuando se conecta, debemos comprobar si alguien se conecta
//Solo queremos recibir el id, ya que es un objeto grande.







