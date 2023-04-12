const express = require("express");
const App = express();
const http = require("http").Server(express);
const Socket = require('socket.io')(http)
const port = process.env.PORT || 3000;

App.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

Socket.on('connection', (socket) => {
  socket.on('chatMessage', msg => {
    Socket.emit('chatMessage', msg);
  });
});

http.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});